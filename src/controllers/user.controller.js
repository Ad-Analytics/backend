const UserService = require('../services/user.service')
const {z} = require('zod')
const {userUpdateSchema, userSettingsUpdateSchema} = require('../utils/validationSchema')

module.exports = class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers()
            res.status(200).json(users)
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }

    static async getUser(req, res) {
        try {
            const user = await UserService.getUser(req.params.id)
            res.status(200).json(user)
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }

    static async updateUser(req, res) {
        try {
            const validatedData = userUpdateSchema.parse(req.body)

            const user = await UserService.getUser(validatedData.id)
            if (!user)
                return res.status(400).json({message: 'User not found'})

            const updatedUser = await UserService.updateUser(validatedData)
            res.status(200).json(updatedUser)
        } catch (err) {
            if (err instanceof z.ZodError) {
                res.status(400).json({ message: err.errors })
            } else {
                res.status(400).json({ message: err.message })
            }
        }
    }

    static async updateUserSettings(req, res) {
        try {
            const validatedData = userSettingsUpdateSchema.parse(req.body)

            const user = await UserService.getUser(validatedData.user_id)
            if (!user)
                return res.status(400).json({message: 'User not found'})

            const updatedUserSettings = await UserService.updateUserSettings(validatedData)
            res.status(200).json(updatedUserSettings)
        } catch (err) {
            if (err instanceof z.ZodError) {
                res.status(400).json({ message: err.errors })
            } else {
                res.status(400).json({ message: err.message })
            }
        }
    }
}