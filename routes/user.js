const express = require('express');
const router = express.Router();
const { getUsers,findUser } = require('../controller/users');


router.get('/',  getUsers);
router.get('/:id',  findUser); //localhost:8000/user/1
// router.post('/',  createUser); //localhost:8000/user/create
module.exports = router;
