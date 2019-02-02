const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GymSchema = new Schema(
  {
    name: { type: String, min: 3, max: 65, required: true },
    email: { type: String, required: true },
    cnpj: { type: String, min: 11, max: 18, required: true },
    personals: [{ type: Schema.Types.ObjectId, ref: 'personal' }],
    address: {
      street: { type: String, min: 3, max: 70 },
      number: { type: String, min: 1, max: 5 },
      neighborhood: { type: String, min: 3, max: 70 },
      city: { type: String, min: 3, max: 70 },
      state: { type: String, min: 3, max: 70 },
      country: { type: String, min: 3, max: 70 },
      cep: { type: String, min: 3, max: 70 },
    },
    user: { type: Schema.Types.ObjectId, ref: 'user' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('gym', GymSchema);
