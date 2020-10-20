import yargs from 'yargs';
import { connect, disconnect, User } from '@tiremaster/models';

async function connectToDB() {
  await connect();
}
async function disconnectToDB() {
  await disconnect();
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
