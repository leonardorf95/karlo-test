import UserModel from '../models/userModel.js';

const AuthController = {
    singUp: async (req, res) => {
        try {
            const newUser = await UserModel.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                active: 0,
            });

            if (!newUser) {
                return res.status(400).json({
                    message: 'No se pudo completar su petición.'
                });
            }

            newUser.password = 0;

            // TODO: Enviar correos

            return res.status(200).json({
                message: 'Se ha enviado un correo para activar la cuenta',
                newUser
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'No se pudo completar su petición.'
            });
        }
    },
    validateAccount: async (req, res) => {
        try {
            const user = await UserModel.findOne({
                where: {
                    email: req.params.email
                }
            });

            if (!user) {
                return res.status(400).json({
                    message: 'No se pudo completar su petición.'
                });
            }

            user.active = 1;

            await user.save();

            return res.status(200).json({
                message: 'Cuenta activada'
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'No se pudo completar su petición.'
            });
        }
    },
    singIn: async (req, res) => {
        try {

        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'No se pudo completar su petición.'
            });
        }
    }
};

export default AuthController;