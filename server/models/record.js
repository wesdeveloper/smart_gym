const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
	name: String,
	membrosInferiores: [{
		type: Schema.Types.ObjectId,
		ref: 'serie',
	}],
	ombros: [{
		type: Schema.Types.ObjectId,
		ref: 'serie',
	}],
	peitoral: [{
		type: Schema.Types.ObjectId,
		ref: 'serie',
	}],
	dorsal: [{
		type: Schema.Types.ObjectId,
		ref: 'serie',
	}],
	biceps: [{
		type: Schema.Types.ObjectId,
		ref: 'serie',
	}],
	triceps: [{
		type: Schema.Types.ObjectId,
		ref: 'serie',
	}],
	observacoes: String,
});

module.exports = mongoose.model('record', RecordSchema);

