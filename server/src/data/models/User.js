import { model } from 'mongoose';

const User = model('user', {
  username: String,
  password: String,

  name: String,
});

export default User;
