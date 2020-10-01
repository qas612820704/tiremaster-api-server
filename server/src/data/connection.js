import mongoose from 'mongoose';

export default async function setup() {
  return await mongoose.connect('mongodb://localhost/tiremaster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}
