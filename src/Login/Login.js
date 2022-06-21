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
      .map(([el]) => {
        return el;
      });
    if (firstLetters.length > 1) {
      return firstLetters[0] + firstLetters[1];
    }
    return firstLetters[0];
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
