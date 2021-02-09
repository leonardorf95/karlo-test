import sequelize from 'sequelize';
import dbConfig from '../database/dbConfig.js';

import PurchaseOrderModel from '../models/purchaseOrderModel.js';
import ProductModel from './productModel.js';

const DetailOrderModel = dbConfig.define('detail', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    createdAt: sequelize.DATE
});

DetailOrderModel.belongsTo(PurchaseOrderModel);
DetailOrderModel.belongsTo(ProductModel);

export default DetailOrderModel;