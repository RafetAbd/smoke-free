const router = require('express').Router();
const updateUser = require('../controllers/users');
export default router;

router.put('/:id', updateUser);
