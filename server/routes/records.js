const express = require('express');
const RecordController = require('../controllers/record');

const router = express.Router();

router.route('/records')
.get(RecordController.getAllRecords)
.post(RecordController.addRecord)
.delete(RecordController.removeRecord);

router.route('/records/:idRecord')
.get(RecordController.getRecordById)
.post(RecordController.addSerieInRecord);

module.exports = router;

