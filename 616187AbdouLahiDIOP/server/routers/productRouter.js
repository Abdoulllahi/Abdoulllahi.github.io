/**
 * @ Author: Abdou Lahi DIOP
 * @ Create Time: 2023-05-23 22:09:25
 * @ Modified by: Abdou Lahi DIOP
 * @ Modified time: 2023-05-26 22:16:59
 * @ Description:
 */

const express = require('express');
const productController = require('../controllers/productController');
const userRouter = require('./userRouter')

const router = express.Router();

router.get('/', productController.getAll)
router.post('/', productController.save)
router.delete('/:id', productController.deleteById);
router.put('/', productController.edit)
router.use(userRouter);
module.exports = router;