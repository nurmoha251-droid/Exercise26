import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();

    const destination = location.state?.from?.pathname || "/";

    navigate(destination, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
}

export default Login;