import "./Login.css";
import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

function Login() {
  const { name, login } = useContext(Context);

  const getFirstLetters = (name) => {
    const firstLetters = name
      .trim()
      .split(" ")
      .slice(0, 2)
      .map(([el]) => el)
      .join("");

    return firstLetters;
  };

  return (
    <div className="loginWrapper">
      <Link to="/profile">
        {login ? (
          <div className="nameWrapper">{getFirstLetters(name)}</div>
        ) : (
          <div className="signIn"> Sign in</div>
        )}
      </Link>
    </div>
  );
}

export default Login;
