import { Link, useLocation, useNavigate } from "react-router-dom";

function Home({ posts }) {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search") || "";

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    const value = e.target.value;

    navigate(
      value
        ? `/?search=${encodeURIComponent(value)}`
        : "/",
      { replace: true }
    );
  };

  return (
    <div>
      <h1>All Posts</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post.id}>
            <h2>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h2>

            <p>{post.body.substring(0, 100)}...</p>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export default Home;