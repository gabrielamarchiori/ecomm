/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import app from './src/app.js';
import fs from 'fs';
import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';

const file = fs.readFileSync('./swagger/ecomm.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor sendo executado em http://localhost:${port}`);
});
