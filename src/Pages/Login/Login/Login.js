import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import man from '../../../images/man.png';
import google from '../../../images/google.png';


const Login = () => {

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


  return (
    <div className="div d-flex justify-content-center align-items-center py-5">
      <div className="row ">
        <div className="col-md-6 mt-5">
          <div className="my-5">
            <div className="login-btn my-5">
              <button onClick={handleGoogleLogin} className="btn btn-secondary m-2 fw-bold" >
                Signin With
                <img src={google} alt="" />
              </button>

            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-side-image">
            <img className="w-100" src={man} alt="" />
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Login;
