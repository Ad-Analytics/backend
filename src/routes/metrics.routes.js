const express = require('express')
const MetricsController = require('../controllers/metrics.controller')

const router = express.Router()

router.get('/facebook/roi', MetricsController.getFacebookROI)
router.get('/google/roi', MetricsController.getGoogleROI)
router.get('/facebook/cpa', MetricsController.getFacebookCPA)
router.get('/google/cpa', MetricsController.getGoogleCPA)
router.get('/facebook/cpc', MetricsController.getFacebookCPC)
router.get('/google/cpc', MetricsController.getGoogleCPC)
router.get('/facebook/ctr', MetricsController.getFacebookCTR)
router.get('/google/ctr', MetricsController.getGoogleCTR)
router.get('/facebook/roas', MetricsController.getFacebookROAS)
router.get('/google/roas', MetricsController.getGoogleROAS)

module.exports = router