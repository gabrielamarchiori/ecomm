/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import app from './src/app.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor sendo executado em http://localhost:${port}`);
});
