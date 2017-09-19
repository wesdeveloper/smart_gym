const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GymSchema = new Schema({
	name:       { type: String, min: 3, max: 65, required },
    email:      { type: String, min: 3, max: 65, required },
    address:    { type: String, min: 3, max: 65, required },
    cnpj:       { type: String, min: 11, max: 18, required },
    personals:  [{ type: Schema.Types.ObjectId, ref: 'personal' }],
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }    
});

module.exports = mongoose.model('personal', GymSchema);
