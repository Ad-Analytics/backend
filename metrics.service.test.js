const MetricsService = require('../../../src/services/metrics.service')
const MetricsRepository = require('../../../src/repositories/metrics.repository')

jest.mock('../../../src/repositories/metrics.repository')

describe('MetricsService', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe('Facebook Metrics', () => {
        describe('calculateFacebookROI', () => {
            it('should return Facebook ROI data', async () => {
                const mockROIData = {roi: 2.5}
                MetricsRepository.getFacebookROI.mockResolvedValue(mockROIData)

                const result = await MetricsService.calculateFacebookROI()

                expect(result).toEqual(mockROIData)
                expect(MetricsRepository.getFacebookROI).toHaveBeenCalled()
            })

            it('should handle repository errors', async () => {
                MetricsRepository.getFacebookROI.mockRejectedValue(new Error('Database error'))

                await expect(MetricsService.calculateFacebookROI())
                    .rejects
                    .toThrow('Database error')
            })
        })

        describe('calculateFacebookCPA', () => {
            it('should return Facebook CPA data', async () => {
                const mockCPAData = {cpa: 15.75}
                MetricsRepository.getFacebookCPA.mockResolvedValue(mockCPAData)

                const result = await MetricsService.calculateFacebookCPA()

                expect(result).toEqual(mockCPAData)
                expect(MetricsRepository.getFacebookCPA).toHaveBeenCalled()
            })

            it('should handle repository errors', async () => {
                MetricsRepository.getFacebookCPA.mockRejectedValue(new Error('Database error'))

                await expect(MetricsService.calculateFacebookCPA())
                    .rejects
                    .toThrow('Database error')
            })
        })

        describe('calculateFacebookCPC', () => {
            it('should return Facebook CPC data', async () => {
                const mockCPCData = {cpc: 0.5}
                MetricsRepository.getFacebookCPC.mockResolvedValue(mockCPCData)

                const result = await MetricsService.calculateFacebookCPC()

                expect(result).toEqual(mockCPCData)
                expect(MetricsRepository.getFacebookCPC).toHaveBeenCalled()
            })

            it('should handle repository errors', async () => {
                MetricsRepository.getFacebookCPC.mockRejectedValue(new Error('Database error'))

                await expect(MetricsService.calculateFacebookCPC())
                    .rejects
                    .toThrow('Database error')
            })
        })

        describe('calculateFacebookCTR', () => {
            it('should return Facebook CTR data', async () => {
                const mockCTRData = {ctr: 2.3}
                MetricsRepository.getFacebookCTR.mockResolvedValue(mockCTRData)

                const result = await MetricsService.calculateFacebookCTR()

                expect(result).toEqual(mockCTRData)
                expect(MetricsRepository.getFacebookCTR).toHaveBeenCalled()
            })

            it('should handle repository errors', async () => {
                MetricsRepository.getFacebookCTR.mockRejectedValue(new Error('Database error'))

                await expect(MetricsService.calculateFacebookCTR())
                    .rejects
                    .toThrow('Database error')
            })
        })

        describe('calculateFacebookROAS', () => {
            it('should return Facebook ROAS data', async () => {
                const mockROASData = {roas: 3.2}
                MetricsRepository.getFacebookROAS.mockResolvedValue(mockROASData)

                const result = await MetricsService.calculateFacebookROAS()

                expect(result).toEqual(mockROASData)
                expect(MetricsRepository.getFacebookROAS).toHaveBeenCalled()
            })

            it('should handle repository errors', async () => {
                MetricsRepository.getFacebookROAS.mockRejectedValue(new Error('Database error'))

                await expect(MetricsService.calculateFacebookROAS())
                    .rejects
                    .toThrow('Database error')
            })
        })
    })

    describe('Google Metrics', () => {
        describe('calculateGoogleROI', () => {
            it('should return Google ROI data', async () => {
                const mockROIData = {roi: 3.1}
                MetricsRepository.getGoogleROI.mockResolvedValue(mockROIData)

                const result = await MetricsService.calculateGoogleROI()

                expect(result).toEqual(mockROIData)
                expect(MetricsRepository.getGoogleROI).toHaveBeenCalled()
            })

            it('should handle repository errors', async () => {
                MetricsRepository.getGoogleROI.mockRejectedValue(new Error('Database error'))

                await expect(MetricsService.calculateGoogleROI())
                    .rejects
                    .toThrow('Database error')
            })
        })

        describe('calculateGoogleCPA', () => {
            it('should return Google CPA data', async () => {
                const mockCPAData = {cpa: 12.5}
                MetricsRepository.getGoogleCPA.mockResolvedValue(mockCPAData)

                const result = await MetricsService.calculateGoogleCPA()

                expect(result).toEqual(mockCPAData)
                expect(MetricsRepository.getGoogleCPA).toHaveBeenCalled()
            })

            it('should handle repository errors', async () => {
                MetricsRepository.getGoogleCPA.mockRejectedValue(new Error('Database error'))

                await expect(MetricsService.calculateGoogleCPA())
                    .rejects
                    .toThrow('Database error')
            })
        })

        describe('calculateGoogleCPC', () => {
            it('should return Google CPC data', async () => {
                const mockCPCData = {cpc: 0.75}
                MetricsRepository.getGoogleCPC.mockResolvedValue(mockCPCData)

                const result = await MetricsService.calculateGoogleCPC()

                expect(result).toEqual(mockCPCData)
                expect(MetricsRepository.getGoogleCPC).toHaveBeenCalled()
            })

            it('should handle repository errors', async () => {
                MetricsRepository.getGoogleCPC.mockRejectedValue(new Error('Database error'))

                await expect(MetricsService.calculateGoogleCPC())
                    .rejects
                    .toThrow('Database error')
            })
        })

        describe('calculateGoogleCTR', () => {
            it('should return Google CTR data', async () => {
                const mockCTRData = {ctr: 1.8}
                MetricsRepository.getGoogleCTR.mockResolvedValue(mockCTRData)

                const result = await MetricsService.calculateGoogleCTR()

                expect(result).toEqual(mockCTRData)
                expect(MetricsRepository.getGoogleCTR).toHaveBeenCalled()
            })

            it('should handle repository errors', async () => {
                MetricsRepository.getGoogleCTR.mockRejectedValue(new Error('Database error'))

                await expect(MetricsService.calculateGoogleCTR())
                    .rejects
                    .toThrow('Database error')
            })
        })

        describe('calculateGoogleROAS', () => {
            it('should return Google ROAS data', async () => {
                const mockROASData = {roas: 2.8}
                MetricsRepository.getGoogleROAS.mockResolvedValue(mockROASData)

                const result = await MetricsService.calculateGoogleROAS()

                expect(result).toEqual(mockROASData)
                expect(MetricsRepository.getGoogleROAS).toHaveBeenCalled()
            })

            it('should handle repository errors', async () => {
                MetricsRepository.getGoogleROAS.mockRejectedValue(new Error('Database error'))

                await expect(MetricsService.calculateGoogleROAS())
                    .rejects
                    .toThrow('Database error')
            })
        })
    })
})