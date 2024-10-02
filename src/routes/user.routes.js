const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')

router.get('/list', UserController.getAllUsers)
router.get('/:id', UserController.getUser)
router.put('/', UserController.updateUser)
router.put('/settings', UserController.updateUserSettings)

module.exports = router