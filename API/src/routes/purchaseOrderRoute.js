import express from 'express';

import PurchaseOrderController from '../controllers/purchaseOrderController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/purchase',
    AuthMiddleware.verifyToken,
    PurchaseOrderController.getAlls
);

router.get('/purchase/:id',
    AuthMiddleware.verifyToken,
    PurchaseOrderController.getById
);

router.post('/purchase',
    AuthMiddleware.verifyToken,
    PurchaseOrderController.create
);

router.put('/purchase/:id',
    AuthMiddleware.verifyToken,
    PurchaseOrderController.updated
);

router.delete('/purchase/:id',
    AuthMiddleware.verifyToken,
    PurchaseOrderController.delete
);


export default router;