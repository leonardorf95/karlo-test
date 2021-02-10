import sequelize from 'sequelize';
import dbConfig from '../database/dbConfig.js';
import bcrypt from 'bcrypt';

const UserModel = dbConfig.define('user', {
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
    email: {
        type: sequelize.STRING(255),
        trim: true,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Agrega un correo válido'
            }
        },
        unique: {
            args: true,
            validate: {
                msg: 'El usuario ya existe'
            }
        }
    },
    password: {
        type: sequelize.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'La contraseña no puede ir vacia'
            }
        }
    },
    active: {
        type: sequelize.INTEGER,
        defaultValue: 0
    },
    createdAt: sequelize.DATE
}, {
    hooks: {
        beforeCreate(user) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
        }
    }
});

UserModel.prototype.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

export default UserModel;