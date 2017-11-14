const GymmerModel = require('../models/gymmerModel');

module.exports = {
	getGymmerById: (req, res) => {
		const { idGymmer } = req.value.params;
		GymmerModel.findById(idGymmer)
			.then((gymmer) => {
				if (!gymmer) {
					return res.status(404).json({ success: false, message: 'Gymmer not found!' });
				}
				return res.status(200).json(gymmer);
			})
			.catch(err => res.json(err));
	},
	getAllGymmers: (req, res) => {
		GymmerModel.find({})
			.then((gymmers) => {
				if (!gymmers) {
					return res.status(200).json([]);
				}
				return res.json(gymmers);
			})
			.catch(err => res.json(err));
	},
	addGymmer: (req, res) => {
		const { body } = req.value;
		const newGymmer = new GymmerModel(body);

		newGymmer.save()
			.then(gymmer => res.status(201).json(gymmer))
			.catch(err => res.json(err));
	},
	updateGymmer: (req, res) => {
		const { params, body } = req.value;

		GymmerModel.findOneAndUpdate({ _id: params.idGymmer }, body)
			.then((gymmer) => {
				GymmerModel.findById(gymmer._id)
				.then((updatedGymmer) => {
					if (!updatedGymmer) {
						return res.status(404).json({ success: false, message: 'Gymmer not found!' });
					}
					return res.status(201).json(updatedGymmer);
				})
				.catch(err => res.json(err));
			})
			.catch(err => res.json(err));
	},
	removeGymmer: (req, res) => {
		const { idGymmer } = req.value.params;
		GymmerModel.findByIdAndRemove(idGymmer)
			.then((gymmer) => {
				if (!gymmer) {
					return res.status(404).json({ success: false, mensagem: 'Gymmer not found.' });
				}
				return res.status(200).json({ success: true, mensagem: 'Gymmer deleted.' });
			})
			.catch(err => res.json(err));
	},
};
