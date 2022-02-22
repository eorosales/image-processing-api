import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test /resize endpoint response', () => {
    it('Get the resize API endpoint', async () => {
        const response = await request.get('/api/resize')
        expect(response.status).toBe(200)
    })
})
