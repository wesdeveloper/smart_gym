const RecordModel = require('../models/recordModel');
const SerieModel = require('../models/serieModel');

module.exports = {
  getAllRecords: (req, res) => {
    RecordModel.find({})
      .then(records => res.status(200).json(records))
      .catch(err => res.status(200).json(err));
  },
  addRecord: (req, res) => {
    const newRecord = new RecordModel(req.body);

    newRecord
      .save()
      .then(record => {
        if (!record) {
          return res.status(500).json({ succes: false, mensagem: 'Error to insert new record' });
        }
        return res.status(201).json(record);
      })
      .catch(err => res.json(err));
  },
  removeRecord: (req, res) => {
    RecordModel.findByIdAndRemove(req.body.id)
      .then(record => {
        if (!record) {
          return res.status(404).json({ success: false, mensagem: 'Record not found.' });
        }
        return res.status(200).json({ success: true, mensagem: 'Record deleted.' });
      })
      .catch(err => res.json(err));
  },
  getRecordById: (req, res) => {
    RecordModel.findById(req.params.idRecord)
      .populate('trapezio')
      .populate('ombro')
      .then(record => res.status(200).json(record))
      .catch(err => res.status(200).json(err));
  },
  addSerieInRecord: (req, res) => {
    const group = req.body.group;
    SerieModel.findById(req.body.idSerie)
      .then(serie => {
        RecordModel.findById(req.params.idRecord)
          .then(record => {
            record[group].push(serie);
            console.log(record);
            record
              .save()
              .then(newRecord => {
                if (!newRecord) {
                  return res
                    .status(500)
                    .json({ succes: false, mensagem: 'Error to insert new record' });
                }
                return res.status(201).json(newRecord);
              })
              .catch(err => res.json(err));
          })
          .catch(err => res.status(200).json(err));
      })
      .catch(err => res.json(err));
  },
};
