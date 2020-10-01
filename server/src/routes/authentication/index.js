import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { compare } from 'bcrypt';
import User from '../../data/models/User';

const router = Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  let user;
  try {
    user = await User.findOne({ username });
  } catch (error) {
    return res.status(500).json({ reasons: [error.toString()] });
  }

  if (!user) {
    return res.status(400).json({ reasons: ['user not found'] });
  }

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ reasons: ['password incorrect'] });
  }

  const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOEKN_SECRET, {
    expiresIn: process.env.ACCESS_TOEKN_EXPIRES_IN,
  });

  return res
    .status(200)
    .cookie('token', token, {
      maxAge: process.env.ACCESS_TOEKN_EXPIRES_IN,
    })
    .json({ messages: ['OK'] });
});

router.post('/login', async (req, res) => {
  return res
    .clearCookie('token')
    .json({ messages: ['OK'] });
});

export default router;
