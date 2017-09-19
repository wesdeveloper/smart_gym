const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
	personal: { type: Schema.Types.ObjectId, ref: 'personal' },
	gymmer: { type: Schema.Types.ObjectId, ref: 'gymmer' },
	A: [{ type: Schema.Types.ObjectId, ref: 'serie' }],
	B: [{ type: Schema.Types.ObjectId, ref: 'serie' }],
	C: [{ type: Schema.Types.ObjectId, ref: 'serie' }],
	D: [{ type: Schema.Types.ObjectId, ref: 'serie' }],
	E: [{ type: Schema.Types.ObjectId, ref: 'serie' }],
	F: [{ type: Schema.Types.ObjectId, ref: 'serie' }],
	G: [{ type: Schema.Types.ObjectId, ref: 'serie' }],
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }	
});

module.exports = mongoose.model('record', RecordSchema);

