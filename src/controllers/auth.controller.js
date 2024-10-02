const {z} = require('zod')
const AuthService = require('../services/auth.service')
const {registerSchema, loginSchema} = require('../utils/validationSchema')

module.exports = class AuthController {
    async static register(req, res, next) {
        try {
            const validatedData = registerSchema.parse(req.body)
            const result = await AuthService.register(validatedData)

            res.status(201).json(result)
        } catch (err) {
            console.error(err)
            if (err instanceof z.ZodError) {
                res.status(400).json({ message: err.errors })
            } else {
                res.status(400).json({ message: err.message })
            }
        }
    }

    async static login(req, res, next) {
        try {
            const validatedData = loginSchema.parse(req.body)
            const result = await AuthService.login(validatedData.email, validatedData.password)

            res.status(201).json(result)
        } catch (err) {
            console.error(err)
            if (err instanceof z.ZodError) {
                res.status(400).json({ message: err.errors })
            } else {
                res.status(400).json({ message: err.message })
            }
        }
    }
}