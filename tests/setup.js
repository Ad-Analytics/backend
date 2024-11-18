const {PrismaClient} = require('@prisma/client')
const {mockDeep, mockReset, DeepMockProxy} = require('jest-mock-extended')

jest.mock('@prisma/client', () => ({
    PrismaClient: jest.fn()
}))

const prismaMock = mockDeep()
const prisma = new PrismaClient()

beforeEach(() => {
    mockReset(prismaMock)
    prisma.$extends = jest.fn().mockReturnValue(prismaMock)
})

module.exports = {
    prismaMock,
    prisma
}