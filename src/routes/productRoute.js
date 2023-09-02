const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router
    .route('/produtos')
    .get(controller.getAllProducts);

router
    .route('/produtos/adicionar')
    .post(controller.AddProduct);

router
    .route('/produtos/:id')
    .get(controller.getOneProduct)
    .put(controller.editProduct)
    .delete(controller.delProduct);

module.exports = router;