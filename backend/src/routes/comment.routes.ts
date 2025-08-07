import express from 'express';
import Comment from '../models/comment.model';

const router = express.Router();

router.post('/posts/:postId/comments', async (req, res) => {
  const { content } = req.body;
  const { postId } = req.params;

  try {
    const comment = await Comment.create({ content, PostId: postId });

    // Event: Comment:Created
    req.app.get('eventBus').emit('Comment:Created', comment);

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }
});

export default router;
