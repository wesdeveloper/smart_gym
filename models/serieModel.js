const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SerieSchema = new Schema({
	exercise: { type: String, min: 3, max: 70, required: true },
	quantities: { type: Number, min: 1, max: 100, required: true },
	repeatQuantity: { type: String, min: 1, max: 1000, required: true },
	target: { type: String, min: 1, max: 10, required: true },
	description: { type: String, max: 250 },
}, { timestamps: true });

module.exports = mongoose.model('serie', SerieSchema);
