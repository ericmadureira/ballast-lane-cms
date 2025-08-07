import { Router, Request, Response } from 'express';
import passport from 'passport';

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [];
let nextId = 1;

const router = Router();

// GET /posts → list all
router.get("/", (req: Request, res: Response) => {
  res.json(posts);
});

// POST /posts → create new post.
router.post("/", (req: Request, res: Response) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }
  const newPost: Post = { id: nextId++, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

export default router;
