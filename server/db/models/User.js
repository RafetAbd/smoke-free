const Sequeliize = require('sequelize');
const db = require('../db');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const SALY_ROUNDS = 5;

const User = db.define('user', {
    username: {
        type: Sequeliize.STRING,
        allowNull: false,
        unique: true,
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
    packesPerDay: {
        type: Sequeliize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    PacketPrice: {
        type: Sequeliize.INTEGER,
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
User.authenticate = async function (username, password) {
    const user = await User.findOne({
        where: {
            username
        }
    });
    if (!user || !(await user.validatePassword(password))) {
        const err = new Error('Invalid username or password');
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
        user.password = await bcrypt.hash(user.password, SALY_ROUNDS);
    }
}

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate(users => {
    Promise.all(users.map(hashPassword));
});