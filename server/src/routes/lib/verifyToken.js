import jwt from 'jsonwebtoken';
import { User } from '@tiremaster/models';

export default async function verifyToken(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(403).json({ reasons: ['no token provide'] });
  }

  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.ACCESS_TOEKN_SECRET);
  } catch (error) {
    return res.status(500).json({ reasons: ['failed to authenticate token'] });
  }

  req.userId = decoded.id;

  return next();
}
