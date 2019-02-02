const express = require('express');
const RecordController = require('../controllers/recordController');

const router = express.Router();

router
  .route('/')
  .get(RecordController.getAllRecords)
  .post(RecordController.addRecord)
  .delete(RecordController.removeRecord);

router
  .route('/:idRecord')
  .get(RecordController.getRecordById)
  .post(RecordController.addSerieInRecord);

module.exports = router;
