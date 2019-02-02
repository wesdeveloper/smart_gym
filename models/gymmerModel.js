const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GymmerSchema = new Schema(
  {
    code: { type: Number, min: 1, max: 9999, required: true },
    name: { type: String, min: 3, max: 65, required: true },
    phone: { type: String, min: 8, max: 20, required: true },
    email: { type: String, min: 3, max: 65 },
    born: { type: Date, required: true },
    cpf: { type: String, min: 11, max: 11, required: true },
    cnpj: { type: String, min: 11, max: 18 },
    height: { type: String, min: 2, max: 7 },
    Weight: { type: String, min: 2, max: 7 },
    gender: { type: String, min: 1, max: 10 },
    historyRecords: [{ type: Schema.Types.ObjectId, ref: 'records' }],
    address: {
      street: { type: String, min: 3, max: 70 },
      number: { type: String, min: 3, max: 5 },
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

module.exports = mongoose.model('gymmer', GymmerSchema);
