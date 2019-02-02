const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonalSchema = new Schema({
  code: { type: Number, min: 1, max: 9, required },
  name: { type: String, min: 3, max: 65, required },
  phone: { type: String, min: 3, max: 65, required },
  email: { type: String, min: 3, max: 65 },
  born: { type: Date, required },
  gym: { type: String, min: 3, max: 65, required },
  cpf_cnpj: { type: String, min: 11, max: 18, required },
  gymmers: [{ type: Schema.Types.ObjectId, ref: 'gymmer' }],
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

module.exports = mongoose.model('personal', PersonalSchema);
