const SerieModel = require('../models/serieModel');

module.exports = {
	getSerieById: (req, res) => {
		const { idSerie } = req.value.params;
		SerieModel.findById(idSerie)
			.then((serie) => {
				if (!serie) {
					return res.status(404).json({ success: false, message: 'Serie not found!' });
				}
				return res.status(200).json(serie);
			})
			.catch(err => res.json(err));
	},
	getAllSeries: (req, res) => {
		SerieModel.find({})
			.then((series) => {
				if (!series) {
					return res.status(200).json([]);
				}
				return res.json(series);
			})
			.catch(err => res.json(err));
	},
	addSerie: (req, res) => {
		const { body } = req.value;
		const newSerie = new SerieModel(body);

		newSerie.save()
			.then(serie => res.status(201).json(serie))
			.catch(err => res.json(err));
	},
	updateSerie: (req, res) => {
		const { params, body } = req.value;

		SerieModel.findOneAndUpdate({ _id: params.idSerie }, body)
			.then((serie) => {
				SerieModel.findById(serie._id)
				.then((updatedSerie) => {
					if (!updatedSerie) {
						return res.status(404).json({ success: false, message: 'Serie not found!' });
					}
					return res.status(201).json(updatedSerie);
				})
				.catch(err => res.json(err));
			})
			.catch(err => res.json(err));
	},
	removeSerie: (req, res) => {
		const { idSerie } = req.value.params;
		SerieModel.findByIdAndRemove(idSerie)
			.then((serie) => {
				if (!serie) {
					return res.status(404).json({ success: false, mensagem: 'Serie not found.' });
				}
				return res.status(200).json({ success: true, mensagem: 'Serie deleted.' });
			})
			.catch(err => res.json(err));
	},
};
