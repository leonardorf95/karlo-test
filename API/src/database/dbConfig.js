  
import sequelize from 'sequelize';

import config from '../config/config.js';

const configSequelize  = new sequelize(config.DB_NAME, config.DB_SERVER, config.DB_PASS, {
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }
});

export default configSequelize;