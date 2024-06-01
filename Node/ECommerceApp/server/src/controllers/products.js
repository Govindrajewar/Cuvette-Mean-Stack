const Product = require('../models/products.js');

const getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json({
        status: "SUCCESS",
        data: products,
      });
    } catch (error) {
      res.json({
        status: "ERROR",
        message: error.message,
      });
    }
  }


const createProduct = async (req, res) => {
    try {

        const { name, price, description, imageURL, ratings } = req.body;
        await Product.create({ name, price, description, imageURL, ratings })
        res.json({
            status: "SUCCESS",
            message: "Product Created Successfully"
          });
    } catch (error) {
      res.json({
        status: "ERROR",
        message: error.message,
      });
    }
  }


const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, imageURL, ratings } = req.body;
        await Product.findByIdAndUpdate(id, { name, price, description, imageURL, ratings })
        res.json({
            status: "SUCCESS",
            message: "Product Updated Successfully"
          });
    } catch (error) {
      res.json({
        status: "ERROR",
        message: error.message,
      });
    }
  }

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.json({
      status: 'SUCCESS',
      message: 'Product deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}


module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
}
