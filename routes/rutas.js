const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const leadController = require('../controllers/leadController');
const inventarioController = require('../controllers/inventarioController');

router.post('/addUser',userController.addUser);
router.get('/getUsers',userController.getUsers);
router.post('/authUser',userController.authUser);
router.post('/getUser',userController.getUserRegex);
router.delete('/deleteUser/:id',userController.deleteUser);

router.post('/addLead',leadController.addLead);
router.get('/getLeads',leadController.getLeads);
router.get('/getCategoryLeads',leadController.getCategoryLeads);


router.get('/getLeadsApartados',leadController.getLeadsApartados);
router.get('/getApartadosConteo',leadController.getApartadosConteo);

router.post('/addInventario',inventarioController.addInventario);


module.exports = router;