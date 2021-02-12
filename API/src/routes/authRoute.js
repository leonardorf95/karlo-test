import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();

router.post('/auth', AuthController.singUp);
router.post('/auth/:email', AuthController.validateAccount);

export default router;