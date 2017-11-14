const GymModel = require('../models/gymModel');

module.exports = {
	getGymById: (req, res) => {
		const { idGym } = req.value.params;
		GymModel.findById(idGym)
			.then((gym) => {
				if (!gym) {
					return res.status(404).json({ success: false, message: 'Gym not found!' });
				}
				return res.status(200).json(gym);
			})
			.catch(err => res.json(err));
	},
	getAllGyms: (req, res) => {
		GymModel.find({})
			.then((gyms) => {
				if (!gyms) {
					return res.status(200).json([]);
				}
				return res.json(gyms);
			})
			.catch(err => res.json(err));
	},
	addGym: (req, res) => {
		const { body } = req.value;
		const newGym = new GymModel(body);

		newGym.save()
			.then(gym => res.status(201).json(gym))
			.catch(err => res.json(err));
	},
	updateGym: (req, res) => {
		const { params, body } = req.value;

		GymModel.findOneAndUpdate({ _id: params.idGym }, body)
			.then((gym) => {
				GymModel.findById(gym._id)
				.then((updatedGym) => {
					if (!updatedGym) {
						return res.status(404).json({ success: false, message: 'Gym not found!' });
					}
					return res.status(201).json(updatedGym);
				})
				.catch(err => res.json(err));
			})
			.catch(err => res.json(err));
	},
	removeGym: (req, res) => {
		const { idGym } = req.value.params;
		GymModel.findByIdAndRemove(idGym)
			.then((gym) => {
				if (!gym) {
					return res.status(404).json({ success: false, mensagem: 'Gym not found.' });
				}
				return res.status(200).json({ success: true, mensagem: 'Gym deleted.' });
			})
			.catch(err => res.json(err));
	},
};
