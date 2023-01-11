const {Router} = require('express');

const { getContador } = require('../controllers/contadores.controller');
const { route } = require('./user.routes');

const router = Router();

router.get('/',getContador);

module.exports = router;