const Sequeliize = require('sequelize');
const db = require('../db');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
require("dotenv").config();

const SALT_ROUNDS = 5;

const User = db.define('user', {
    email: {
        type: Sequeliize.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: {
        type: Sequeliize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: Sequeliize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    quittingDay: {
        type: Sequeliize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    cigarettesPerDay: {
        type: Sequeliize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    PacketPrice: {
        type: Sequeliize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = User;

// instanceMethods:
User.prototype.generateToken = function () {
    const token = JWT.sign({
        id: this.id,
        // username: this.username
    }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
    return token;
}

User.prototype.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
}

// classMethods:
User.authenticate = async function (email, password) {
    const user = await User.findOne({
        where: {
            email
        }
    });
    if (!user || !(await user.validatePassword(password))) {
        const err = new Error('Invalid email or password');
        err.status = 401;
        throw err;
    }
    return user.generateToken();
}

User.findByToken = async function (token) {
    try {
        const { id } = await JWT.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(id);
        if ( !user ) {
            throw 'oops';
        }
        return user;
    } catch (ex) {
        const err = Error('Invalid token');
        err.status = 401;
        throw err;
    }
}

// hooks:
const hashPassword = async (user) => {
    if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    }
}

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate(users => {
    Promise.all(users.map(hashPassword));
});