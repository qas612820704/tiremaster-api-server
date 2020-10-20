import { model, Schema } from 'mongoose';

const Tire = new Schema({
  number: Number,
  width: Number,
  flat_ratio: Number,
  brand: String,
  year: Number,
  manufacturer: String,
  price: Number,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

Tire.pre('save', async function () {
  this.updated_at = Date.now();
});

export default model('Tire', Tire);
