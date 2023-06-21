/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line linebreak-style
import express from 'express';
import categories from './categories.routes.js';

const routes = ((app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Tô funcionando' });
  });

  app.use(
    express.json(),
    categories,
  );
});

export default routes;
