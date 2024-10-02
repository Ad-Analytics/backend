const {z} = require('zod')
const AuthService = require('../services/auth.service')
const {registerSchema, loginSchema} = require('../utils/validationSchema')

module.exports = class AuthController {
    static async register(req, res) {
        try {
            const validatedData = registerSchema.parse(req.body)
            const result = await AuthService.register(validatedData)

            res.status(201).json(result)
        } catch (err) {
            if (err instanceof z.ZodError) {
                res.status(400).json({ message: err.errors })
            } else {
                res.status(400).json({ message: err.message })
            }
        }
    }

    static async login(req, res) {
        try {
            const validatedData = loginSchema.parse(req.body)
            const result = await AuthService.login(validatedData.email, validatedData.password)

            res.status(201).json(result)
        } catch (err) {
            if (err instanceof z.ZodError) {
                res.status(400).json({ message: err.errors })
            } else {
                res.status(400).json({ message: err.message })
            }
        }
    }
}