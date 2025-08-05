import { Router, Request, Response } from 'express';
import passport from 'passport';

const router = Router();

router.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  (req: Request, res: Response) => {
    res.json({ message: `Hello ${(req.user as any).username}, you accessed a protected route!` });
  }
);

export default router;
