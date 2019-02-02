const express = require('express');
const GymController = require('../controllers/gymController');
const { validateParam, validateBody, schemas } = require('../helps/routeHelpers');

const router = express.Router();

router
  .route('/')
  .get(GymController.getAllGyms)
  .post(validateBody(schemas.gymSchema), GymController.addGym);

router
  .route('/:idGym')
  .get(validateParam(schemas.idSchema, 'idGym'), GymController.getGymById)
  .put(
    [validateParam(schemas.idSchema, 'idGym'), validateBody(schemas.gymUpdateSchema)],
    GymController.updateGym,
  )
  .delete(validateParam(schemas.idSchema, 'idGym'), GymController.removeGym);

module.exports = router;
