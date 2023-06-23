/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import {
  afterEach, beforeEach, describe, expect, test,
} from '@jest/globals';
import app from '../../app';

const mockedCategory = {
  name: 'TESTE',
};

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

let idResponse;
// eslint-disable-next-line no-unused-vars
let nameResponse;
describe('POST em /categories', () => {
  test('Deve criar uma nova categoria', async () => {
    const response = await request(app)
      .post('/categories')
      .send(mockedCategory)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    idResponse = response.body._id;
    nameResponse = response.body.name;

    expect(response.body).toHaveProperty('name');
  });
  test('Não deve criar uma nova categoria sem a propriedade name', async () => {
    await request(app)
      .post('/categories')
      .send({})
      .expect(400);
  });
});
describe('GET em /categories', () => {
  test('Deve retornar uma lista de categorias', async () => {
    const response = await request(app)
      .get('/categories')
      .expect(200);

    const index = response.body.length;
    expect(response.body[index - 1].name).toEqual('TESTE');
  });
});
describe('GET em /categories/id', () => {
  test('Deve retornar a categoria requerida pelo ID', async () => {
    await request(app)
      .get(`/categories/${idResponse}`)
      .expect(200);
  });
  test('Deve retornar um erro caso o ID não exista', async () => {
    await request(app)
      // eslint-disable-next-line quotes
      .get(`/categories/64933d6fce2fcbdd97770`)
      .expect(404);
  });
});
describe('PUT em /categories/id', () => {
  test.each([
    ['name', { name: 'Categoria teste atualizada' }],
  ])('Deve alterar o campo %s', async (chave, param) => {
    await request(app)
      .put(`/categories/${idResponse}`)
      .send(param)
      .expect(200);
  });
  test('Deve retornar um erro caso o ID não exista', async () => {
    await request(app)
      // eslint-disable-next-line quotes
      .put(`/categories/64933d6fce2fcbdd97770`)
      .expect(404);
  });
});
describe('DELETE em /categories/id', () => {
  test('Deve deletar a categoria requerida pelo ID', async () => {
    await request(app)
      .delete(`/categories/${idResponse}`)
      .expect(204);
  });
  test('Deve retornar um erro caso o ID não exista', async () => {
    await request(app)
    // eslint-disable-next-line quotes
      .delete(`/categories/64933d6fce2fcbdd97770`)
      .expect(404);
  });
});
