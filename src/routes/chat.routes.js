const express = require('express')
const {defaultMiddleware} = require('@nlbridge/express')
const router = express.Router()

router.post('/', defaultMiddleware('openai', {
    apiKey: process.env.OPENAI_API_KEY,
    chatModel: 'gpt-4o'
}))

module.exports = router