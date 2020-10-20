import mongoose from 'mongoose';

export async function connect() {
  return await mongoose.connect('mongodb://localhost/tiremaster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export function disconnect() {
  return mongoose.connection.close();
}

export {
  default as User,
  schema as UserSchema,
} from './User';

export {
  default as Tire,
  schema as TireSchema,
} from './Tire';
