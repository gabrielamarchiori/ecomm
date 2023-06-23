/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import categories from '../models/Category.js';

class CategoryController {
  static listCategories = async (req, res) => {
    const response = await categories.find();
    return res.status(200).json(response);
  };

  static categoryDetail = async (req, res) => {
    try {
      const { id } = req.params;

      const categoryFound = await categories.findById(id);
      res.status(200).json(categoryFound);
    } catch (error) {
      console.log(error);
      res.status(404).json(error.message);
    }
  };

  static createCategory = async (req, res) => {
    try {
      const newCategory = req.body;

      if (Object.keys(newCategory)[0] !== 'name') {
        throw new Error('O nome da categoria é um campo obrigatório');
      }

      const categoryCreated = await categories.create(newCategory);

      res.status(201).json(categoryCreated);
    } catch (error) {
      if (error.message === 'O nome da categoria é um campo obrigatório') {
        res.status(400).json(error.message);
      }
    }
  };

  static updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedDatas = req.body;
      const updatedCategory = await categories.findByIdAndUpdate(id, updatedDatas, { new: true });
      res.status(200).json(updatedCategory);
    } catch (error) {
      console.log(error);
      res.status(404).json(error.message);
    }
  };

  static updateStatusCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const categoryFound = await categories.findById(id);
      if (categoryFound.status === 'ATIVA') {
        throw new Error('Essa categoria já está ativada');
      }
      const categoryActivated = await categories.findByIdAndUpdate(id, { status: 'ATIVA' }, { new: true });
      res.status(200).json(categoryActivated);
    } catch (error) {
      console.log(error);
      res.status(404).json(error.message);
    }
  };

  static deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      await categories.findByIdAndDelete(id);
      res.status(204).json({});
    } catch (error) {
      console.log(error);
      res.status(404).json(error.message);
    }
  };
}

export default CategoryController;
