import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost({ addPost }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) return;

    addPost({
      title,
      body,
    });

    navigate("/");
  };

  return (
    <div>
      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Write your post..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <button type="submit">Publish Post</button>
      </form>
    </div>
  );
}

export default CreatePost;