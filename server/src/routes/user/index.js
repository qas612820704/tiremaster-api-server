import { Router } from 'express';
import { User } from '@tiremaster/models';

const router = Router();

router.get('/profile', async (req, res) => {
  let user = null;
  try {
    user = await User.findById(req.userId, { password: 0 });
  } catch (e) {
    return res.status(500).json({ reasons: ['failed to find user'] });
  }

  if (!user) {
    return res.status(404).json({ reasons: ['user not found'] });
  }

  return res.status(200).json({
    payload: {
      profile: user,
    },
  });
});

export default router;
