const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SerieSchema = new Schema({
	num_ap: String,
	exercise: String,
	quantities: Number,
	repeatQuantity: String,
});

module.exports = mongoose.model('serie', SerieSchema);

