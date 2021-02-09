import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();

router.get('/products', ProductController.getAlls);
router.get('/products/:id', ProductController.getById);
router.post('/products', ProductController.create);
router.put('/products/:id', ProductController.updated);
router.delete('/products/:id', ProductController.delete);

export default router;