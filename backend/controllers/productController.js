// controllers/productController.js
const Product = require('../models/product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, imageUrl } = req.body;
    const newProduct = new Product({ name, price, description, category, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: 'Error creating product' });
  }
};

module.exports = { getProducts, createProduct };
