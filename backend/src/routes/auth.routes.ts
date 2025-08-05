import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body;
    const user = await User.create({ username, password, role });
    res.json({ message: 'User registered', user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user || !(await user.validatePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || 'dev_secret',
      { expiresIn: '1h' }
    );
    res.json({ token });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
