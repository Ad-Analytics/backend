const UserRepository = require('../repositories/user.repository')

module.exports = class UserService {
    static getAllUsers() {
        return UserRepository.getAllUsers()
    }

    static getUser(id) {
        return UserRepository.getUser(id)
    }

    static updateUser(userData) {
        return UserRepository.updateUser(userData)
    }

    static updateUserSettings(settingsData) {
        return UserRepository.updateUserSettings(settingsData)
    }
}