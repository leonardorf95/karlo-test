import sequelize from 'sequelize';
import dbConfig from '../database/dbConfig.js';

const ProductModel = dbConfig.define('product', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize.STRING(255),
        trim: true,
        allowNull: false
    },
    quantity: {
        type: sequelize.INTEGER(11),
        allowNull: false
    },
    price: {
        type: sequelize.DECIMAL(18, 2),
        allowNull: false
    },
    createdAt: sequelize.DATE
});

export default ProductModel;