import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();

router.post('/auth', AuthController.singUp);
router.post('/auth/:email', AuthController.validateAccount);
router.get('/auth/:email', AuthController.forgotPassword);
router.get('/auth', AuthController.singIn);

export default router;