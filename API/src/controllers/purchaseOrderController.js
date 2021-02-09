import PurchaseOrderModel from '../models/purchaseOrderModel.js';
import DetailOrderModel from '../models/detailPurchaseModel.js';

const PurchaseOrderController = {
    getAlls: async (req, res) => {
        try {
            const items = await PurchaseOrderModel.findAll({
                order: [
                    ['createdAt', 'DESC']
                ]
            });

            if (!items) {
                return res.status(400).json({
                    message: 'No se pudo cargar la información solicitada.',
                    items: null
                });
            }

            return res.status(200).json({
                message: 'Ok',
                items
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'No se pudo completar su petición.'
            });
        }
    },
    getById: async (req, res) => {
        try {
            const item = await PurchaseOrderModel.findAll({
                where: {
                    id: req.params.id
                }
            });

            if (!item) {
                return res.status(404).json({
                    message: 'No se encontro la información solicitada de este producto.',
                    item: null
                });
            }

            return res.status(200).json({
                message: 'Ok',
                item
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'No se pudo completar su petición.'
            });
        }
    },
    create: async (req, res) => {
        try {
            const purchase = await PurchaseOrderModel.create({
                subTotal: req.body.subTotal,
                iva: req.body.iva,
                total: req.body.total,
            });

            if (!purchase) {
                return res.status(400).json({
                    message: 'No se pudo cargar la información solicitada.'
                });
            }

            for (let i = 0; i < req.body.products.length; i++) {
                await DetailOrderModel.create({
                    purchaseId: purchase.id,
                    productId: req.body.products[i].id
                });
            }

            return res.status(200).json({
                message: 'Ok'
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'No se pudo completar su petición.'
            });
        }
    },
    updated: async (req, res) => {
        try {
            const item = await PurchaseOrderModel.findOne({
                where: {
                    id: req.params.id
                }
            });

            if (!item) {
                return res.status(404).json({
                    message: 'No se encontro la información solicitada de esta orden de compra.'
                });
            }

            const {
                subTotal,
                iva,
                total
            } = req.body;

            item.subTotal = subTotal;
            item.iva = iva;
            item.total = total;

            const itemDetail = await DetailOrderModel.findAll({
                where: {
                    purchaseId: item.id
                }
            });

            await item.save();

            if (!itemDetail) {
                return res.status(404).json({
                    message: 'No se encontro la información solicitada del detalle esta orden de compra.'
                });
            }

            for (let i = 0; i < req.body.products.length; i++) {
                const product = await DetailOrderModel.findAll({
                    where: {
                        purchaseId: item.id,
                        productId: req.body.products[i].id
                    }
                });

                if (product.length === 0) {
                    await DetailOrderModel.create({
                        purchaseId: item.id,
                        productId: req.body.products[i].id
                    });
                }
            }

            return res.status(200).json({
                message: 'Ok'
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'No se pudo completar su petición.'
            });
        }
    },
    delete: async (req, res) => {
        try {
            await PurchaseOrderModel.destroy({
                where: {
                    id: req.params.id
                }
            });

            const details = await DetailOrderModel.findAll({
                where: {
                    purchaseId: req.params.id
                }
            });

            for (let i = 0; i < details.length; i++) {
                await DetailOrderModel.destroy({
                    where: {
                        id: details[i].id
                    }
                });
            }
            
            return res.status(200).json({
                message: 'Ok'
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'No se pudo completar su petición.'
            });
        }
    }
};

export default PurchaseOrderController;