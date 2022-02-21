import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test endpoint responses', () => {
    it('Get the main API endpoint', async () => {
        const response = await request.get('/')
        expect(response.status).toBe(200)
    })
})
