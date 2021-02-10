import jwt from 'jsonwebtoken';

import UserModel from '../models/userModel.js';
import config from '../config/config.js';

const AuthMiddleware = {
    verifyToken: async (req, res, next) => {
        try {
            const token = req.headers['x-access-token'];

            if (!token) return res.status(403).json({
                message: 'Token no valido.'
            });

            const decoded = jwt.verify(token, config.SECRET);

            req.userId = decoded.id;

            const user = await UserModel.findAll({
                where: {
                    id: req.userId
                }
            });

            if (!user) return res.status(404).json({
                message: 'Usuario no encontrado.'
            });

            next();
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'Token invalido, solicitud no procesada.'
            });
        }
    }
};

export default AuthMiddleware;