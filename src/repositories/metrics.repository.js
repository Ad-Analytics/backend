const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const MetricsRepository = {
    async getGoogleRevenuePerClick() {
        const result = await prisma.googleads_custom_report.aggregate({
            _sum: {
                metrics_cost: true,
                metrics_clicks: true,
            },
        })

        const totalRevenue = result._sum.metrics_cost
        const totalClicks = result._sum.metrics_clicks

        return totalClicks > 0 ? totalRevenue / totalClicks : 0
    },

    async getFacebookROI() {
        const result = await prisma.facebook_ad_insights.groupBy({
            by: ['campaign_id', 'campaign_name'],
            _sum: {
                spend: true,
                actions_value: true,
            },
        })

        return result.map((item) => ({
            ...item,
            ROI: item._sum.actions_value && item._sum.spend
                ? ((item._sum.actions_value - item._sum.spend) / item._sum.spend) * 100
                : null,
        }))
    },

    async getGoogleROI() {
        const customRevenuePerClick = await this.getGoogleRevenuePerClick()

        const result = await prisma.googleads_custom_report.groupBy({
            by: ['campaign_id', 'campaign_name'],
            _sum: {
                metrics_cost: true,
                metrics_clicks: true,
            },
        })

        return result.map((item) => ({
            ...item,
            ROI: item._sum.metrics_clicks && item._sum.metrics_cost
                ? ((item._sum.metrics_clicks * customRevenuePerClick - item._sum.metrics_cost) / item._sum.metrics_cost) * 100
                : null,
        }))
    },

    async getFacebookCPA() {
        const result = await prisma.facebook_ad_insights.groupBy({
            by: ['campaign_id', 'campaign_name'],
            _sum: {
                spend: true,
                actions_value: true,
            },
        })

        return result.map((item) => ({
            ...item,
            CPA: item._sum.actions_value ? item._sum.spend / item._sum.actions_value : null,
        }))
    },

    async getGoogleCPA() {
        const result = await prisma.googleads_custom_report.groupBy({
            by: ['campaign_id', 'campaign_name'],
            _sum: {
                metrics_cost: true,
                metrics_clicks: true,
            },
        })

        return result.map((item) => ({
            ...item,
            CPA: item._sum.metrics_clicks ? item._sum.metrics_cost / item._sum.metrics_clicks : null,
        }))
    },

    async getFacebookCPC() {
        const result = await prisma.facebook_ad_insights.groupBy({
            by: ['campaign_id', 'campaign_name'],
            _sum: {
                spend: true,
                clicks: true,
            },
        })

        return result.map((item) => ({
            ...item,
            CPC: item._sum.clicks ? item._sum.spend / item._sum.clicks : null,
        }))
    },

    async getGoogleCPC() {
        const result = await prisma.googleads_custom_report.groupBy({
            by: ['campaign_id', 'campaign_name'],
            _sum: {
                metrics_cost: true,
                metrics_clicks: true,
            },
        })

        return result.map((item) => ({
            ...item,
            CPC: item._sum.metrics_clicks ? item._sum.metrics_cost / item._sum.metrics_clicks : null,
        }))
    },

    async getFacebookCTR() {
        const result = await prisma.facebook_ad_insights.groupBy({
            by: ['campaign_id', 'campaign_name'],
            _sum: {
                impressions: true,
                clicks: true,
            },
        })

        return result.map((item) => ({
            ...item,
            CTR: item._sum.impressions ? (item._sum.clicks / item._sum.impressions) * 100 : null,
        }))
    },

    async getGoogleCTR() {
        const result = await prisma.googleads_custom_report.groupBy({
            by: ['campaign_id', 'campaign_name'],
            _sum: {
                metrics_impressions: true,
                metrics_clicks: true,
            },
        })

        return result.map((item) => ({
            ...item,
            CTR: item._sum.metrics_impressions ? (item._sum.metrics_clicks / item._sum.metrics_impressions) * 100 : null,
        }))
    },

    async getFacebookROAS() {
        const result = await prisma.facebook_ad_insights.groupBy({
            by: ['campaign_id', 'campaign_name'],
            _sum: {
                spend: true,
                actions_value: true,
            },
        })

        return result.map((item) => ({
            ...item,
            ROAS: item._sum.spend ? item._sum.actions_value / item._sum.spend : null,
        }))
    },

    async getGoogleROAS() {
        const customRevenuePerClick = await this.getGoogleRevenuePerClick()

        const result = await prisma.googleads_custom_report.groupBy({
            by: ['campaign_id', 'campaign_name'],
            _sum: {
                metrics_cost: true,
                metrics_clicks: true,
            },
        })

        return result.map((item) => ({
            ...item,
            ROAS: item._sum.metrics_cost
                ? (item._sum.metrics_clicks * customRevenuePerClick) / item._sum.metrics_cost
                : null,
        }))
    },
}

module.exports = MetricsRepository