const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SerieSchema = new Schema({
	name: 			{ type: String, min: 3, max: 70, required: true },
	exercise: 		{ type: String, min: 3, max: 70, required: true },
	quantities: 	{ type: Number, min: 1, max: 2,  required: true },
	repeatQuantity: { type: String, min: 1, max: 10, required: true },
	subject: 		{ type: String, min: 1, max: 10, required: true },
	description: 	{ type: String, max: 250 },
	timestamps: 	{ createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('serie', SerieSchema);

