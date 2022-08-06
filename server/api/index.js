const router = require('express').Router();
const usersRoute  = require('./routes/users');
module.exports = router;

router.use('/users', usersRoute);