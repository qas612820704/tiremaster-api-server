import express, { Router } from 'express';
import morgan from 'morgan';
import cookie from 'cookie-parser';

import verifyToken from './lib/verifyToken';
import authentication from './authentication';
import user from './user';

const app = express();

app.use(morgan('dev'));
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authentication);
app.use('/api/user', verifyToken, user);

export default app;
