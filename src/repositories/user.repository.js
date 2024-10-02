const prisma = require('../models/prismaClient')

module.exports = class UserRepository {
    static getAllUsers() {
        return prisma.user.findMany()
    }

    static getUser(id) {
        return prisma.user.findUnique({
            where: {id: id}
        })
    }

    static updateUser(userData) {
        return prisma.user.update({
            where: {id: userData.id},
            data: {
                email: userData.email,
                name: userData.name
            }
        })
    }

    static updateUserSettings(settingsData) {
        return prisma.userSettings.update({
            where: {user_id: settingsData.user_id},
            data: {
                fb_access_token: settingsData.fb_access_token,
                fb_account_id: settingsData.fb_account_id,
                fb_api_key: settingsData.fb_api_key,
                fb_api_secret: settingsData.fb_api_secret
            }
        })
    }
}