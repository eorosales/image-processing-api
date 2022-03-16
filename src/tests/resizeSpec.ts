import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test /resize endpoint response', () => {

    it('Get the resize API endpoint', async () => {
        const response = await request.get('/api/resize?title=dtsj&width=300&height=300')
        expect(response.status).toBe(200)
    })
})
