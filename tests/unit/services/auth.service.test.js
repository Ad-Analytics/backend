const bcrypt = require('bcryptjs')
const {generateToken} = require('../../../src/utils/jwt')

jest.mock('bcryptjs')
jest.mock('../../../src/utils/jwt')
jest.mock('../../../src/models/prismaClient', () => ({
    user: {
        findUnique: jest.fn(),
        create: jest.fn()
    },
    userSettings: {
        create: jest.fn()
    },
    $transaction: jest.fn()
}))

const prisma = require('../../../src/models/prismaClient')
const AuthService = require('../../../src/services/auth.service')

describe('AuthService', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe('register', () => {
        const mockUserData = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'password123'
        }

        const mockHashedPassword = 'hashedPassword123'
        const mockCreatedUser = {
            id: 1,
            name: 'Test User',
            email: 'test@example.com',
            password: mockHashedPassword,
            type: 'CUSTOMER'
        }

        beforeEach(() => {
            bcrypt.hash.mockResolvedValue(mockHashedPassword)
            generateToken.mockReturnValue('mock-token')

            prisma.$transaction.mockImplementation(callback => callback(prisma))
        })

        it('should successfully register a new user', async () => {
            prisma.user.findUnique.mockResolvedValue(null)
            prisma.user.create.mockResolvedValue(mockCreatedUser)
            prisma.userSettings.create.mockResolvedValue({id: 1, user_id: 1})

            const result = await AuthService.register(mockUserData)

            expect(result).toHaveProperty('token')
            expect(prisma.user.findUnique).toHaveBeenCalledWith({
                where: {email: mockUserData.email}
            })
            expect(bcrypt.hash).toHaveBeenCalledWith(mockUserData.password, 15)
            expect(prisma.user.create).toHaveBeenCalledWith({
                data: {
                    name: mockUserData.name,
                    email: mockUserData.email,
                    password: mockHashedPassword,
                    type: 'CUSTOMER'
                }
            })
            expect(prisma.userSettings.create).toHaveBeenCalledWith({
                data: {user_id: mockCreatedUser.id}
            })
            expect(generateToken).toHaveBeenCalledWith(mockCreatedUser)
        })

        it('should throw error if email already exists', async () => {
            prisma.user.findUnique.mockResolvedValue({...mockCreatedUser})

            await expect(AuthService.register(mockUserData))
                .rejects
                .toThrow('Email already in use')

            expect(prisma.user.create).not.toHaveBeenCalled()
            expect(prisma.userSettings.create).not.toHaveBeenCalled()
        })

        it('should handle database transaction errors', async () => {
            prisma.user.findUnique.mockResolvedValue(null)
            prisma.$transaction.mockRejectedValue(new Error('Database error'))

            await expect(AuthService.register(mockUserData))
                .rejects
                .toThrow('Database error')
        })
    })

    describe('login', () => {
        const mockLoginData = {
            email: 'test@example.com',
            password: 'password123'
        }

        const mockUser = {
            id: 1,
            email: 'test@example.com',
            password: 'hashedPassword123',
            name: 'Test User',
            type: 'CUSTOMER'
        }

        beforeEach(() => {
            jest.clearAllMocks()
            generateToken.mockReturnValue('mock-token')
        })

        it('should successfully login a user', async () => {
            prisma.user.findUnique.mockResolvedValue(mockUser)
            bcrypt.compare.mockResolvedValue(true)

            const result = await AuthService.login(mockLoginData.email, mockLoginData.password)

            expect(result).toHaveProperty('token')
            expect(prisma.user.findUnique).toHaveBeenCalledWith({
                where: {email: mockLoginData.email}
            })
            expect(bcrypt.compare).toHaveBeenCalledWith(mockLoginData.password, mockUser.password)
            expect(generateToken).toHaveBeenCalledWith(mockUser)
        })

        it('should throw error if email is invalid', async () => {
            prisma.user.findUnique.mockResolvedValue(null)

            await expect(AuthService.login(mockLoginData.email, mockLoginData.password))
                .rejects
                .toThrow('Invalid email')

            expect(bcrypt.compare).not.toHaveBeenCalled()
        })

        it('should throw error if password is invalid', async () => {
            prisma.user.findUnique.mockResolvedValue(mockUser)
            bcrypt.compare.mockResolvedValue(false)

            await expect(AuthService.login(mockLoginData.email, mockLoginData.password))
                .rejects
                .toThrow('Invalid password')

            expect(generateToken).not.toHaveBeenCalled()
        })
    })
})
