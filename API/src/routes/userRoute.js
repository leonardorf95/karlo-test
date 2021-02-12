import express from 'express';

import UserController from '../controllers/userController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

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