/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import products from '../models/Product.js';

class ProductController {
  static listProducts = async (req, res) => {
    const response = await products.find().populate('categoria', 'name');
    return res.status(200).json(response);
  };

  static productDetail = async (req, res) => {
    try {
      const { id } = req.params;

      const productFound = await products.findById(id).populate('categoria', 'name');
      res.status(200).json(productFound);
    } catch (error) {
      console.error(error);
      res.status(404).json(error.message);
    }
  };

  static createProduct = async (req, res) => {
    try {
      const newProduct = req.body;
      const productCreated = await products.create(newProduct);
      res.status(201).json(productCreated);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  };

  static updateProducts = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedDatas = req.body;
      const updatedProduct = await products.findByIdAndUpdate(id, updatedDatas, { new: true });
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(404).json(error.message);
    }
  };

  static deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      await products.findByIdAndDelete(id);
      res.status(204).json({});
    } catch (error) {
      console.error(error);
      res.status(404).json(error.message);
    }
  };
}

export default ProductController;
