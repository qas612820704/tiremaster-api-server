import app from './routes/express';

main();

async function main() {

  await new Promise(resolve => app.listen(process.env.PORT, resolve));

  console.info(`The server is running at http://localhost:${process.env.PORT}/`);
}
