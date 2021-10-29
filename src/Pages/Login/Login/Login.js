import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";


const Login = () => {
  const {

    handleUserRegister,
    handleUserLogin,
  } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home';
  //console.log('Came from ',location.state?.from);

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_url);
      })
  }

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  // console.log(email, password);

  const handleRegister = () => {
    handleUserRegister(email, password);
  };

  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  return (
    <div className="div d-flex justify-content-center align-items-center py-5">
      <div className="row ">
        <div className="col-md-6">
          <div>
            <div className="form-input mt-5">
              <input
                onChange={hanldeEmail}
                className="mt-2 p-2"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                onChange={hanldePassword}
                className="mt-2 p-2"
                type="password"
                placeholder="Password(6Character)"
              />
              <br />
              <div className="login-regiater-btn mt-4">
                <button
                  onClick={handleRegister}
                  className="btn btn-primary me-1"
                >
                  Register
                </button>
                <button onClick={handleLogin} className="btn btn-success ms-1">
                  Login
                </button>
              </div>
            </div>
            <div className="login-btn mt-4">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-warning m-2"
              >
                Google SignIn
              </button>

            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-side-image">
            <img
              className="w-100"
              src="https://www.narchar.com/assets/images/login-img.png"
              alt=""
            />
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Login;
