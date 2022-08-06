const router = require('express').Router();
const usersRoute  = require('./routes/users');
export default router;

router.use('/users', usersRoute);