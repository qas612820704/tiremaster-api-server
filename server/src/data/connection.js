import mongoose from 'mongoose';

const connection = mongoose.connect('mongodb://localhost/tiremaster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default connection;
