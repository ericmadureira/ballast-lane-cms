import { useEffect, useState } from 'react';
import axios from 'axios';
import './PostComments.css';

interface Comment {
  id: number;
  content: string;
  createdAt: string;
}

interface Props {
  postId: number;
}

export default function PostComments({ postId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  const fetchComments = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`);
      setComments(res.data);
    } catch (err) {
      console.error('Failed to load comments', err);
    }
  };

  const submitComment = async () => {
    if (!newComment.trim()) return;
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`, {
        content: newComment,
      });
      setNewComment('');
      fetchComments();
    } catch (err) {
      console.error('Failed to post comment', err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      <ul className="comment-list">
        {comments.map((c) => (
          <li key={c.id}>{c.content}</li>
        ))}
      </ul>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={submitComment}>Submit</button>
    </div>
  );
}
