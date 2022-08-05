const router = require('express').Router();
const { User } = require('../db');
module.exports = router;

// recieve a email, passowrd then verify and response with a token.
router.post('/login', async (req, res, next) => {
    try {
        res.send({ token: await User.authenticate(req.body) });
    } catch (err) {
        next(err);
    }
});

// recieve user info, create a new user and response with a token.
router.post('/signup', async (req, res, next) => {
    try {
        const { username, password, name, quittingDay, packesPerDay, PacketPrice } = req.body;
        const user = await User.create({
            username,
            password,
            name,
            quittingDay,
            packesPerDay,
            PacketPrice
        });
        res.send({ token: user.generateToken() });
    } catch (err) {
        if ( err.name === 'SequelizeUniqueConstraintError' ) {
            res.status(401).send({ message: 'User already exists' });
        } else {
            next(err);
        }   
    }
});

// recieve a token, verify and response with a user.
router.get('/me', async (req, res, next) => {
    try {
        res.send(await User.findByToken(req.headers.authorization));
    } catch (ex) {
        next(ex);
    }
});
