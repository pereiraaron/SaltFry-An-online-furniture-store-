import React from "react";
import "./LoginScreen.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/userActions";
import Footer from "../../components/Footer.js/Footer";
import Message from "../../components/Message/Message";

const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect, error]);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div className="signupScreen">
        <form onSubmit={handleSignIn} className="login-form">
          <h1>Sign In</h1>
          {error && <Message type="error">Inavlid Credentials</Message>}
          <input
            type="email"
            placeholder="Email address"
            className="inputfield"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="inputfield"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">
            {loading ? "Logging In,Please Wait....." : "Sign In"}
          </button>
          <div className="text-container">
            <span>Don't have an account?</span>{" "}
            <Link
              onClick={() => {
                setEmail("");
                setPassword("");
              }}
              style={{ color: "#795744" }}
              to={redirect ? `/register?redirect=${redirect}` : "/redirect"}
            >
              SignUp
            </Link>
          </div>
        </form>
      </div>
      <div style={{ position: "fixed", width: "100% ", bottom: 0 }}>
        <Footer />
      </div>
    </>
  );
};

export default LoginScreen;
