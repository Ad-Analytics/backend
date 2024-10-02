const {z} = require('zod')

const registerSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8, 'Password must be at least 8 characters')
})

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

const userUpdateSchema = z.object({
    id: z.number().int().nonnegative(),
    email: z.string().email(),
    name: z.string()
})

const userSettingsUpdateSchema = z.object({
    user_id: z.number().int().nonnegative(),
    fb_access_token: z.string(),
    fb_account_id: z.string(),
    fb_api_key: z.string(),
    fb_api_secret: z.string()
})

module.exports = {
    registerSchema,
    loginSchema,
    userUpdateSchema,
    userSettingsUpdateSchema
}