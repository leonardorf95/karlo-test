import express from 'express';

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/users', AuthController.singIn);

router.get('/users', 
    AuthMiddleware.verifyToken, 
    UserController.getAlls
);

router.get('/users/:id', 
    AuthMiddleware.verifyToken, 
    UserController.getById
);

router.delete('/users/:id', 
    AuthMiddleware.verifyToken, 
    UserController.delete
);

export default router;