import express from 'express';
import PurchaseOrderController from '../controllers/purchaseOrderController.js';

const router = express.Router();

router.get('/purchase', PurchaseOrderController.getAlls);
router.get('/purchase/:id', PurchaseOrderController.getById);
router.post('/purchase', PurchaseOrderController.create);
router.put('/purchase/:id', PurchaseOrderController.updated);
router.delete('/purchase/:id', PurchaseOrderController.delete);

export default router;