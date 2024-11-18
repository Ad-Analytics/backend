const UserService = require('../../../src/services/user.service')
const UserRepository = require('../../../src/repositories/user.repository')

jest.mock('../../../src/repositories/user.repository')

describe('UserService', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe('getAllUsers', () => {
        it('should return all users', async () => {
            const mockUsers = [
                {id: 1, name: 'User 1', email: 'user1@example.com'},
                {id: 2, name: 'User 2', email: 'user2@example.com'}
            ]
            UserRepository.getAllUsers.mockResolvedValue(mockUsers)

            const result = await UserService.getAllUsers()

            expect(result).toEqual(mockUsers)
            expect(UserRepository.getAllUsers).toHaveBeenCalled()
        })

        it('should handle repository errors', async () => {
            UserRepository.getAllUsers.mockRejectedValue(new Error('Database error'))

            await expect(UserService.getAllUsers())
                .rejects
                .toThrow('Database error')
        })
    })

    describe('getUser', () => {
        const userId = 1

        it('should return a specific user', async () => {
            const mockUser = {id: userId, name: 'Test User', email: 'test@example.com'}
            UserRepository.getUser.mockResolvedValue(mockUser)

            const result = await UserService.getUser(userId)

            expect(result).toEqual(mockUser)
            expect(UserRepository.getUser).toHaveBeenCalledWith(userId)
        })

        it('should handle repository errors', async () => {
            UserRepository.getUser.mockRejectedValue(new Error('User not found'))

            await expect(UserService.getUser(userId))
                .rejects
                .toThrow('User not found')
        })
    })

    describe('updateUser', () => {
        const mockUserData = {
            id: 1,
            name: 'Updated Name',
            email: 'updated@example.com'
        }

        it('should update user data', async () => {
            UserRepository.updateUser.mockResolvedValue(mockUserData)

            const result = await UserService.updateUser(mockUserData)

            expect(result).toEqual(mockUserData)
            expect(UserRepository.updateUser).toHaveBeenCalledWith(mockUserData)
        })

        it('should handle repository errors', async () => {
            UserRepository.updateUser.mockRejectedValue(new Error('Update failed'))

            await expect(UserService.updateUser(mockUserData))
                .rejects
                .toThrow('Update failed')
        })
    })

    describe('updateUserSettings', () => {
        const mockSettingsData = {
            userId: 1,
            theme: 'dark',
            notifications: true
        }

        it('should update user settings', async () => {
            UserRepository.updateUserSettings.mockResolvedValue(mockSettingsData)

            const result = await UserService.updateUserSettings(mockSettingsData)

            expect(result).toEqual(mockSettingsData)
            expect(UserRepository.updateUserSettings).toHaveBeenCalledWith(mockSettingsData)
        })

        it('should handle repository errors', async () => {
            UserRepository.updateUserSettings.mockRejectedValue(new Error('Settings update failed'))

            await expect(UserService.updateUserSettings(mockSettingsData))
                .rejects
                .toThrow('Settings update failed')
        })
    })
})