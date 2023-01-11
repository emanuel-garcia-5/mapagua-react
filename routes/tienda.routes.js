const {Router} = require('express');
const { check } = require('express-validator')
const { getTienda, postTienda } = require('../controllers/tienda.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/',getTienda);

router.post('/',[
check('nombre', 'El nombre es obligatorio').notEmpty(),
check('precio','el precio es obligatorio').notEmpty(),
validarCampos
],postTienda);

module.exports = router;