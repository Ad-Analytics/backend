const {z} = require('zod')

const registerSchema = z.object({
    name: z.string(),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Password must be at least 8 characters')
})

const loginSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string()
})

module.exports = {
    registerSchema,
    loginSchema
}