const express = require('express');
const GymmerController = require('../controllers/gymmerController');
const { validateParam, validateBody, schemas } = require('../helps/routeHelpers');

const router = express.Router();

router.route('/')
    .get(GymmerController.getAllGymmers)
    .post(validateBody(schemas.gymmerSchema), GymmerController.addGymmer);

router.route('/:idGymmer')
    .get(validateParam(schemas.idSchema, 'idGymmer'), GymmerController.getGymmerById)
    .put([validateParam(schemas.idSchema, 'idGymmer'), validateBody(schemas.gymmerUpdateSchema)], GymmerController.updateGymmer)
    .delete(validateParam(schemas.idSchema, 'idGymmer'), GymmerController.removeGymmer);

module.exports = router;
