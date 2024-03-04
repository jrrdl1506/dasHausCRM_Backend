const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const leadController = require('../controllers/leadController');

router.post('/addUser',userController.addUser);
router.get('/getUsers',userController.getUsers);
router.post('/authUser',userController.authUser);
router.post('/getUser',userController.getUserRegex);

router.post('/addLead',leadController.addLead);
router.get('/getLeads',leadController.getLeads);
router.get('/getCategoryLeads',leadController.getCategoryLeads);

module.exports = router;