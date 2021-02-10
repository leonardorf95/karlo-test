import sequelize from 'sequelize';
import dbConfig from '../database/dbConfig.js';

const PurchaseOrderModel = dbConfig.define('purchase', {
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
        type: sequelize.DECIMAL(18, 2),
        allowNull: false
    },
    total: {
        type: sequelize.DECIMAL(18, 2),
        allowNull: false
    },
    applyDiscount: sequelize.INTEGER(1),
    createdAt: sequelize.DATE
});

export default PurchaseOrderModel;