const MetricsService = require('../services/metrics.service')

const MetricsController = {
    async getFacebookROI(req, res) {
        try {
            const result = await MetricsService.calculateFacebookROI()
            res.json(result)
        } catch (error) {
            res.status(500).json({error: 'Erro ao calcular ROI do Facebook'})
        }
    },

    async getGoogleROI(req, res) {
        try {
            const result = await MetricsService.calculateGoogleROI()
            res.json(result)
        } catch (error) {
            res.status(500).json({error: 'Erro ao calcular ROI do Google'})
        }
    },

    async getFacebookCPA(req, res) {
        try {
            const result = await MetricsService.calculateFacebookCPA()
            res.json(result)
        } catch (error) {
            res.status(500).json({error: 'Erro ao calcular CPA do Facebook'})
        }
    },

    async getGoogleCPA(req, res) {
        try {
            const result = await MetricsService.calculateGoogleCPA()
            res.json(result)
        } catch (error) {
            res.status(500).json({error: 'Erro ao calcular CPA do Google'})
        }
    },

    async getFacebookCPC(req, res) {
        try {
            const result = await MetricsService.calculateFacebookCPC()
            res.json(result)
        } catch (error) {
            res.status(500).json({error: 'Erro ao calcular CPC do Facebook'})
        }
    },

    async getGoogleCPC(req, res) {
        try {
            const result = await MetricsService.calculateGoogleCPC()
            res.json(result)
        } catch (error) {
            res.status(500).json({error: 'Erro ao calcular CPC do Google'})
        }
    },

    async getFacebookCTR(req, res) {
        try {
            const result = await MetricsService.calculateFacebookCTR()
            res.json(result)
        } catch (error) {
            res.status(500).json({error: 'Erro ao calcular CTR do Facebook'})
        }
    },

    async getGoogleCTR(req, res) {
        try {
            const result = await MetricsService.calculateGoogleCTR()
            res.json(result)
        } catch (error) {
            res.status(500).json({error: 'Erro ao calcular CTR do Google'})
        }
    },

    async getFacebookROAS(req, res) {
        try {
            const result = await MetricsService.calculateFacebookROAS()
            res.json(result)
        } catch (error) {
            res.status(500).json({error: 'Erro ao calcular ROAS do Facebook'})
        }
    },

    async getGoogleROAS(req, res) {
        try {
            const result = await MetricsService.calculateGoogleROAS()
            res.json(result)
        } catch (error) {
            res.status(500).json({error: 'Erro ao calcular ROAS do Google'})
        }
    },
}

module.exports = MetricsController