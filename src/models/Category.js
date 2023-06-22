/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema(

  {
    id: { type: mongoose.Types.ObjectId },
    name: {
      type: String, minLength: 3, enum: ['AUTOMOTIVA', 'CELULARES', 'INFORMÁTICA', 'LIVROS', 'MÓVEIS', 'TESTE'], required: true,
    },
    status: { type: String, enum: ['ATIVA', 'INATIVA'], default: 'ATIVA' },
  },
  {
    versionKey: false,
  },
);

const categories = mongoose.model('categories', categoriesSchema);

export default categories;
