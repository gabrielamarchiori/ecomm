/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Types.ObjectId },
    nome: {
      type: String, minLength: 4, validate: /^[^0-9].*$/, required: true,
    },
    descricao: { type: String, minLength: 10, required: true },
    slug: {
      type: String, minLength: 5, validate: [/^[a-zA-Z0-9-]+$/, 'O slug não deve conter espaços em branco'], required: true,
    },
    preco: { type: mongoose.Types.Decimal128, min: 0.01, required: true },
    estoque: {
      type: Number, min: 1, required: true,
    },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true },
  },
  {
    versionKey: false,
  },
);

const products = mongoose.model('products', productsSchema);

export default products;
