/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import {
  afterEach, beforeEach, describe, expect, test,
} from '@jest/globals';
import app from '../../app';

const mockedProduct = {
  nome: 'Produto Teste',
  descricao: 'Uma descrição teste para um produto teste',
  slug: 'produto-teste-2023',
  preco: 12.90,
  estoque: 2,
  categoria: '64947d16e5ff754937c81e5d',
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

describe('POST em /products', () => {
  test('Deve criar um produto', async () => {
    const response = await request(app)
      .post('/products')
      .send(mockedProduct)
      .expect(201);
    // eslint-disable-next-line no-underscore-dangle
    idResponse = response.body._id;
    expect(response.body).toHaveProperty('nome');
    expect(response.body).toHaveProperty('descricao');
    expect(response.body).toHaveProperty('slug');
    expect(response.body).toHaveProperty('preco');
    expect(response.body).toHaveProperty('estoque');
    expect(response.body).toHaveProperty('categoria');
  });
});

describe('GET em /products', () => {
  test('Deve retornar uma lista de categorias', async () => {
    await request(app)
      .get('/products')
      .expect(200);
  });
});
describe('GET em /products/id', () => {
  test('Deve retornar o produto requerido pelo ID', async () => {
    await request(app)
      .get(`/products/${idResponse}`)
      .expect(200);
  });
});
describe('PUT em /products/id', () => {
  test.each([
    ['nome', { nome: 'Produto Teste atualizado' }],
    ['estoque', { estoque: 15 }],
  ])('Deve alterar o campo %s', async (chave, param) => {
    await request(app)
      .put(`/products/${idResponse}`)
      .send(param)
      .expect(200);
  });
});
describe('DELETE em /products/id', () => {
  test('Deve deletar um produto requerido pelo ID', async () => {
    await request(app)
      .delete(`/products/${idResponse}`)
      .expect(204);
  });
});
