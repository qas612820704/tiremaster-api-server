import { connect } from '@tiremaster/models';
import app from './routes/express';

main();

async function main() {
  await connect();

  await new Promise(resolve => app.listen(process.env.PORT, resolve));

  console.info(`The server is running at http://localhost:${process.env.PORT}/`);

}
