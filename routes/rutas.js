const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/addUser',userController.addUser);
router.get('/getUsers',userController.getUsers);
router.post('/authUser',userController.authUser);

module.exports = router;