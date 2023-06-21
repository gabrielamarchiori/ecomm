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
      console.error(error);
      res.status(404).json({ error: `${error.message} - Categoria não foi encontrada` });
    }
  };

  static createCategory = async (req, res) => {
    try {
      const newCategory = req.body;
      const categoryCreated = await categories.create(newCategory);

      res.status(201).json(categoryCreated);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: `${error.message} - Bad Request` });
    }
  };
}

export default CategoryController;
