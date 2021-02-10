import express from 'express';

import ProductController from '../controllers/productController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/products', 
    AuthMiddleware.verifyToken,
    ProductController.getAlls
);

router.get('/products/:id', 
    AuthMiddleware.verifyToken,
    ProductController.getById
);

router.post('/products', 
    AuthMiddleware.verifyToken,
    ProductController.create
);

router.put('/products/:id', 
    AuthMiddleware.verifyToken,
    ProductController.updated
);

router.delete('/products/:id', 
    AuthMiddleware.verifyToken,
    ProductController.delete
);


export default router;