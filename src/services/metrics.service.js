const MetricsRepository = require('../repositories/metrics.repository')

const MetricsService = {
    async calculateFacebookROI() {
        return await MetricsRepository.getFacebookROI()
    },

    async calculateGoogleROI() {
        return await MetricsRepository.getGoogleROI()
    },

    async calculateFacebookCPA() {
        return await MetricsRepository.getFacebookCPA()
    },

    async calculateGoogleCPA() {
        return await MetricsRepository.getGoogleCPA()
    },

    async calculateFacebookCPC() {
        return await MetricsRepository.getFacebookCPC()
    },

    async calculateGoogleCPC() {
        return await MetricsRepository.getGoogleCPC()
    },

    async calculateFacebookCTR() {
        return await MetricsRepository.getFacebookCTR()
    },

    async calculateGoogleCTR() {
        return await MetricsRepository.getGoogleCTR()
    },

    async calculateFacebookROAS() {
        return await MetricsRepository.getFacebookROAS()
    },

    async calculateGoogleROAS() {
        return await MetricsRepository.getGoogleROAS()
    },
}

module.exports = MetricsService