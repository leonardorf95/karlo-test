import UserModel from '../models/userModel.js';

const UserController = {
    getAlls: async (req, res) => {
        try {
            const items = await UserModel.findAll({
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
            const item = await UserModel.findAll({
                where: {
                    id: req.params.id
                }
            });

            if (!item) {
                return res.status(404).json({
                    message: 'No se encontro la información solicitada de este usuario.',
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
    delete: async (req, res) => {
        try {
            await UserModel.destroy({
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
    },
};

export default UserController;