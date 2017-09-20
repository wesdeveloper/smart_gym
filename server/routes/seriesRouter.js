const express = require('express');
const SerieController = require('../controllers/serieController');
const { validateParam, validateBody, schemas } = require('../helps/routeHelpers');

const router = express.Router();

router.route('/')
    .get(SerieController.getAllSeries)
    .post(validateBody(schemas.serieSchema), SerieController.addSerie);

router.route('/:idSerie')
    .get(validateParam(schemas.idSchema, 'idSerie'), SerieController.getSerieById)
    .put([validateParam(schemas.idSchema, 'idSerie'), validateBody(schemas.serieUpdateSchema)], SerieController.updateSerie)
    .delete(validateParam(schemas.idSchema, 'idSerie'), SerieController.removeSerie);

module.exports = router;
