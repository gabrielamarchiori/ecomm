/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import express from 'express';
import ProductController from '../controllers/productsController.js';

const router = express.Router();

router
  .get('/products', ProductController.listProducts)
  .get('/products/:id', ProductController.productDetail)
  .post('/products', ProductController.createProduct)
  .put('/products/:id', ProductController.updateProducts)
  .delete('/products/:id', ProductController.deleteProduct);

export default router;
