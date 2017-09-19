const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GymmerSchema = new Schema({
	name:       { type: String, min: 3, max: 65, required },
    phone:      { type: String, min: 3, max: 65, required },
    email:      { type: String, min: 3, max: 65 },
    born:       { type: Date, required },
    cpf:        { type: String, min: 11, max: 11, required },
    cnpj:       { type: String, min: 11, max: 18 },
    records:    [{ type: Schema.Types.ObjectId, ref: 'records' }],
    user:       { type: Schema.Types.ObjectId, ref: 'user' },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }    
});

module.exports = mongoose.model('gymmer', GymmerSchema);