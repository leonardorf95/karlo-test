import ProductModel from '../models/productModel.js';

const ProductController = {
    getAlls: async (req, res) => {
        try {
            const items = await ProductModel.findAll({
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
            const item = await ProductModel.findAll({
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
            const item = req.body;

            await ProductModel.create(item);

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
            const item = await ProductModel.findOne({
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

            const {
                name,
                quantity,
                price
            } = req.body;

            item.name = name;
            item.quantity = quantity;
            item.price = price;

            await item.save();

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
            await ProductModel.destroy({
                where: {
                    id: req.params.id
                }
            });

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

export default ProductController;