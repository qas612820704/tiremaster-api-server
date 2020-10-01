import yargs from 'yargs';
import mongoose from 'mongoose';

import connection from '../src/data/connection';
import User from '../src/data/models/User';

async function connectToDB() {
  await connection;
}
async function disconnectToDB() {
  await mongoose.connection.close();
}

yargs
  .middleware(connectToDB)
  .command('get [username]', 'Get user', () => { }, async argv => {
    if (argv.all) {
      const users = await User.find({});
      console.log(users);
      return;
    }

    const user = await User.findOne({ username: argv.username });
    console.log(user);
  })
  .command('add <username> <password> <name>', 'Create user', () => { }, async argv => {
    const user = new User({
      username: argv.username,
      password: argv.password,
      name: argv.name,
    });

    await user.save();
  })
  .command('delete [username]', 'Delete User', () => { }, async argv => {
    if (argv.all) {
      await User.deleteMany({});
      return;
    }

    await User.deleteOne({
      username: argv.username,
    });
  })
  .onFinishCommand(disconnectToDB)
  .argv;
