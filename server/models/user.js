const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name:       { type: String, min: 3, max: 65, required },
    email:      { type: String, min: 3, max: 65, required },
    gym:        { type: String, min: 3, max: 65, required },
    cpf_cnpj:   { type: String, min: 11, max: 18, required },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }    
});

module.exports = mongoose.model('personal', UserSchema);
