let express = require('express');
var router = express.Router();

let bicicletaControllerAPI = require('../../controllers/api/bicicletasControllerAPI')

router.get('/', bicicletaControllerAPI.bicicleta_list)

router.post('/create', bicicletaControllerAPI.bicicleta_create)

router.post('/delete', bicicletaControllerAPI.bicicleta_delete)


module.exports = router;