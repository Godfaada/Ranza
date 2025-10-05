import request from 'supertest';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/modules/app.module';

let app: INestApplication;

beforeAll(async () => {
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
  app = moduleRef.createNestApplication();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.init();
});

afterAll(async () => {
  if (app) await app.close();
});

describe('API e2e (in-process)', () => {
  it('GET /health should be ok', async () => {
    const res = await request(app.getHttpServer()).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('POST /auth/signup should return token', async () => {
    const ts = Date.now();
    const email = `ci+${ts}@example.com`;
    const phone = `+23320${(ts % 100000000).toString().padStart(8, '0')}`;
    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ name: 'Test User', phone, email, provider: 'firebase' })
      .set('Content-Type', 'application/json');
    expect([200, 201]).toContain(res.status);
    expect(res.body.token).toBeDefined();
  });

  it('GET /trips search returns list', async () => {
    const res = await request(app.getHttpServer())
      .get('/trips')
      .query({ originLat: 5.6, originLng: -0.18, radiusKm: 10 });
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
