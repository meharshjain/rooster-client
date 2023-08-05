import React from "react";
import GoogleBtn from "./helpers/GoogleBtn";
import "../css/signup.css";
import Header from "./Header";
function Login() {
  return (
    <div className="AppContainer img3">
      <Header />
      <div className="container register login title">SignUp</div>
      <div className="container register">
        <form action="/register" method="POST" id="Loginform">
          <div className="registerForm">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="FNAME"
                name="firstname"
                placeholder="First Name"
                required="required"
              />
              <input
                className="form-control"
                type="text"
                id="LNAME"
                name="lastname"
                placeholder="Last Name"
              />
              <input
                className="form-control"
                type="text"
                name="number"
                maxlength="10"
                placeholder="Phone Number"
                required="required"
              />
              <input
                className="form-control"
                type="date"
                name="dob"
                value="yyyy-mm-dd"
                id="example-date-input"
                required="required"
              />
              <div className="form-group">
                <label>male</label>
                <input type="radio" name="gender" value="male" />
                <label>female</label>
                <input type="radio" name="gender" value="female" />
              </div>
              <div className="form-group title">
                <input
                  className="form-control"
                  type="email"
                  id="EMAIL"
                  name="username"
                  placeholder="Username"
                  required="required"
                />
                <input
                  className="form-control"
                  type="password"
                  id="PASS"
                  name="password"
                  placeholder="Password"
                  required="required"
                />
                <span className="p-viewer">
                  <i
                    className="fas fa-eye-slash fa-2xs"
                    aria-hidden="true"
                    onclick="myFunction()"
                  ></i>
                  <div id="newpassweql"></div>
                </span>
              </div>
            </div>
            By clicking Sign Up, you agree to our Terms , Data Policy and Cookie
            Policy . We may send you SMS notifications. You can opt out to stop
            receiving them whenever you want.
            <br />
            <GoogleBtn />
            <div className="form-group">
              <br />
              <button
                id="loginBtn"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
