/**
 * @ Author: Abdou Lahi DIOP
 * @ Create Time: 2023-05-26 20:45:59
 * @ Modified by: Abdou Lahi DIOP
 * @ Modified time: 2023-05-26 20:51:56
 * @ Description:
 */

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:username', userController.getByUsername);
router.post('/', userController.save);
router.put('/:username/cart/add', userController.addProductToCart);
router.put('/:username/cart/remove', userController.removeProductFromCart);
router.put('/:username/cart/update', userController.updateProductQuantity);
router.put('/:username/cart/place-order', userController.placeOrder);

module.exports = router;
