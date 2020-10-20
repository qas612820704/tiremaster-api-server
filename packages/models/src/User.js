import { model, Schema } from 'mongoose';
import { hash } from 'bcrypt';

export const schema = {
  username: String,
  password: String,

  name: String,
};

const User = new Schema(schema);

User.pre('save', async function () {
  const hashedPassword = await hash(this.password, 10);
  this.password = hashedPassword;
});

export default model('user', User);
