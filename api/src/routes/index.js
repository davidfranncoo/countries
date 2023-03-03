const { Router } = require('express');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const countryRoute = require("./country");
const activityRoute = require("./activity");

router.use("/countries",countryRoute)
router.use("/activities",activityRoute)


module.exports = router;



