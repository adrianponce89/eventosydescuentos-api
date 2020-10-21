import app from '../app';
import supertest from 'supertest';
const request = supertest(app);

it('Gets the schedules endpoint', async (done) => {
  const response = await request.get('/v1/schedules');

  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual([]);

  done();
});
