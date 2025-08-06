import { useEffect, useState } from "react";
import api from "../api";
import "./PostsList.css";

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Buscar posts na API
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts", err);
    }
  };

  const handleCreate = async () => {
    try {
      await api.post("/posts", { title, content });
      setTitle("");
      setContent("");
      fetchPosts();
    } catch (err) {
      console.error("Error creating post", err);
    }
  };

  return (
    <div className="posts-container">
      <h2>Posts</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleCreate}>Create Post</button>
      </div>

      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
