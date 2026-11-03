import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Learning React",
      body: "React is a JavaScript library used to build user interfaces.",
    },
    {
      id: 2,
      title: "Understanding React Router",
      body: "React Router helps developers create navigation between pages.",
    },
    {
      id: 3,
      title: "Learning JavaScript",
      body: "JavaScript is a programming language used to create interactive websites.",
    },
  ]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        id: Math.max(0, ...prevPosts.map((post) => post.id)) + 1,
        ...newPost,
      },
    ]);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home posts={posts} />}
          />

          <Route
            path="/posts/:postId"
            element={<PostDetail posts={posts} />}
          />

          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreatePost addPost={addPost} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;