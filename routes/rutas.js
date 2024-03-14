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
router.post('/anvanzarLead',leadController.anvanzarLead);
router.get('/getLeads',leadController.getLeads);
router.get('/getCategoryLeads',leadController.getCategoryLeads);



router.get('/getLeadsApartados',leadController.getLeadsApartados);
router.get('/getLeadsProspectos',leadController.getLeadsProspectos);

router.get('/getApartadosConteo',leadController.getApartadosConteo);

router.get('/getLeadsGlobalConteo',leadController.getLeadsGlobalConteo);

router.get('/getApartadoPorCanal',leadController.getApartadoPorCanal);
router.get('/getApartadoPorprototipo',leadController.getApartadoPorprototipo);

router.get('/getHitrateApartado',leadController.getHitrateApartado);
router.get('/getLeadsMes',leadController.getLeadsMes);

router.post('/getLeadsByVendor',leadController.getLeadsByVendor);


//router.get('/',leadController.);


router.post('/addInventario',inventarioController.addInventario);
router.get('/getInventario',inventarioController.getInventario);





module.exports = router;