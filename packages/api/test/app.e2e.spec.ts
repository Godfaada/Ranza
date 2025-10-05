import request from 'supertest';

const API = 'http://localhost:4000';

describe('API e2e', () => {
  it('GET /health should be ok', async () => {
    const res = await request(API).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('POST /auth/signup should return token', async () => {
    const res = await request(API)
      .post('/auth/signup')
      .send({ name: 'Test User', phone: '+233200000099', email: 'ci@example.com', provider: 'firebase' })
      .set('Content-Type', 'application/json');
    expect(res.status).toBe(201);
    expect(res.body.token).toBeDefined();
  });

  it('GET /trips search returns list', async () => {
    const res = await request(API).get('/trips').query({ originLat: 5.6, originLng: -0.18, radiusKm: 10 });
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
