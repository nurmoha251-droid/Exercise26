import { useParams, useNavigate } from "react-router-dom";

function PostDetail({ posts }) {
  const { postId } = useParams();
  const navigate = useNavigate();

  const currentIndex = posts.findIndex(
    (post) => post.id === Number(postId)
  );

  const post = posts[currentIndex];

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  const previousPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  return (
    <div>
      <h1>{post.title}</h1>

      <p>{post.body}</p>

      <div>
        <button
          disabled={!previousPost}
          onClick={() =>
            navigate(`/posts/${previousPost.id}`, {
              state: { from: "previous" },
            })
          }
        >
          Previous
        </button>

        <button
          disabled={!nextPost}
          onClick={() =>
            navigate(`/posts/${nextPost.id}`, {
              state: { from: "next" },
            })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PostDetail;