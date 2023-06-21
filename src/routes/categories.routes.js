/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import express from 'express';
import CategoryController from '../controllers/categoriesController.js';

const router = express.Router();

router
  .get('/categories', CategoryController.listCategories)
  .get('/categories/:id', CategoryController.categoryDetail)
  .post('/categories', CategoryController.createCategory)
  .put('/categories/:id', CategoryController.updateCategory)
  .put('/categories/:id/status', CategoryController.updateStatusCategory)
  .delete('/categories/:id', CategoryController.deleteCategory);

export default router;
