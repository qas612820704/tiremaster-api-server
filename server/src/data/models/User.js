import { model, Schema } from 'mongoose';
import { hash } from 'bcrypt';

const User = new Schema({
  username: String,
  password: String,

  name: String,
})

User.pre('save', async function () {
  const hashedPassword = await hash(this.password, 10);
  this.password = hashedPassword;
});

export default model('user', User);
