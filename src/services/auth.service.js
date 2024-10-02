const bcrypt = require('bcryptjs')
const prisma = require('../models/prismaClient')
const {generateToken} = require('../utils/jwt')

module.exports = class AuthService {
    async static register(userData) {
        const existingUser = await prisma.user.findUnique({where: {email: data.email}})
        if (existingUser) {
            throw new Error('Email already in use')
        }

        let newUser;
        await prisma.$transaction(async (tx) => {
            const hashedPassword = await bcrypt.hash(userData.password, 15)

            newUser = await prisma.user.create({
                data: {
                    name: userData.name,
                    email: userData.email,
                    password: hashedPassword,
                    type: 'CUSTOMER'
                }
            })

            await prisma.userSettings.create({
                data: {
                    user_id: newUser.id
                }
            })
        })

        const token = generateToken(newUser)
        return {token}
    }

    async static login(email, password) {
        const user = await prisma.user.findUnique({where: {email: email}})
        if (!user) {
            throw new Error('Invalid email')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            throw new Error('Invalid password')
        }

        const token = generateToken(user)
        return {token}
    }
}