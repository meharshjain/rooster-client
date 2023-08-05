import React, { useState, useEffect } from "react";
import GoogleBtn from "./helpers/GoogleBtn";
import "../css/login.css";
import "../css/style.css";
import Header from "./Header";
function Login(props) {
  function GetFormData() {
    const [username, setUsername] = useState("");
    const userHomePage = async function test() {
      try {
        const res = await fetch("/loginst1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();
        setUsername(user);
      } catch (e) {
        console.log(e);
      }
    };
    useEffect(() => {
      userHomePage();
    }, []);
    if (props.request === "username") {
      return (
        <>
          <form action="/loginst1" method="POST" id="form1">
            <h5>Enter Email</h5>
            <div className="input-box underline">
              <input
                className="form-control"
                id="username"
                type="text"
                name="username"
                placeholder="Enter Your Username"
                required="required"
              />
              <div className="underline"></div>
            </div>
            <div className="input-box button">
              <input type="submit" name="" value="Submit" />
              <input
                type="text"
                name="demo"
                id="demo"
                value=""
                readOnly
                hidden="hidden"
              />
              <input
                type="text"
                name="demo1"
                id="demo1"
                value=""
                readOnly
                hidden="hidden"
              />
            </div>
          </form>
        </>
      );
    }
    if (props.request === "password") {
      return (
        <>
          <form action="/login" method="POST" id="form1">
            <h5>Enter Password</h5>
            <div class="input-box underline">
              <input
                hidden="hidden"
                type="text"
                name="username"
                placeholder="Enter Your Username"
                value={username.ty}
                required="required"
                readonly
              />
              <input
                class="form-control"
                id="myInput"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                required="required"
              />
              <span class="p-viewer">
                <i
                  class="fas fa-eye-slash"
                  aria-hidden="true"
                  onclick="myFunction()"
                ></i>
              </span>
            </div>
            <div class="input-box button">
              <input type="submit" name="" value="Submit" />
            </div>
          </form>
        </>
      );
    }
  }
  return (
    <div className="AppContainer img3">
      <Header />
      <div className="login">
        <div className="container">
          <div className="title formtitle" style={{ marginLeft: "35%" }}>
            Login
          </div>
          {GetFormData()}
          <GoogleBtn />

          <div className="option">
            {" "}
            <a
              className="btn btn-default btn-primary btn-block"
              href="/register"
            >
              Register Here
            </a>{" "}
            Connect With Social Media
          </div>
          <div className="twitter">
            <a href="/">
              <i className="fab fa-twitter"></i>Sign in With Twitter
            </a>
          </div>
          <div className="facebook">
            <a href="/">
              <i className="fab fa-facebook-f"></i>Sign in With Facebook
            </a>
          </div>
        </div>
        <div className="container" hidden={true}>
          <form action="/login" method="POST" id="Loginform">
            <input
              id="EMAIL"
              type="text"
              name="username"
              placeholder="Enter Your Username"
            />
            <input
              className="form-control"
              id="PASS"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required="required"
            />
            <button className="button"></button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
