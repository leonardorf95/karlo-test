import sequelize from 'sequelize';
import dbConfig from '../database/dbConfig.js';

import ProductModel from './productModel.js';

const PurchaseOrderModel = dbConfig.define('product', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subTotal: {
        type: sequelize.DECIMAL(18, 2),
        allowNull: false
    },
    iva: {
        type: sequelize.INTEGER(11),
        allowNull: false
    },
    total: {
        type: sequelize.DECIMAL(18, 2),
        allowNull: false
    },
    createdAt: sequelize.DATE
});

PurchaseOrderModel.hasMany(ProductModel);

export default PurchaseOrderModel;