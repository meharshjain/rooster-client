import { React, useEffect } from "react";
import "../css/home.css";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
const clientId =
  "769480983049-79c4kovqigobm7mqoo7dlh88nfvcchqj.apps.googleusercontent.com";
var user = {};
/* 
import Header from "./Header";
 */

function Home() {
  function GoogleBtn(props) {
    const onSuccess = async (googleUser) => {
      var profile = googleUser.getBasicProfile();
      /*     console.log("ID: " + profile.getId());
      console.log("Name: " + profile.getGivenName());
      console.log("Family Name: " + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl()); */
      console.log("Email: " + profile.getEmail());
      const formRec = {
        Date: new Date(),
        profile: profile,
        GID: profile.getId(),
        LName: profile.getFamilyName(),
        Name: profile.getGivenName(),
        Email: profile.getEmail(),
        Img: profile.getImageUrl(),
        Message: "success login google",
      };
      axios
        .post(`${props.outgoingApi}/api/success/google`, formRec)
        .then((response) => {
          unlockForm(profile);
        })
        .catch((error) => {
          console.log("form submit error" + error.stack);
          alert.error("An issue occurred when submitting");
        });
    };
    const onFailure = (error) => {
      alert.error("An issue occurred");
      console.log(error);
    };
    return (
      <div id="my-signin2">
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      </div>
    );
  }
  function unlockForm(profile) {
    alert.success(
      `Welcome ${profile.getGivenName() + " " + profile.getFamilyName()}!`
    );
    user = {
      fname: profile.getGivenName() + " " + profile.getFamilyName(),
      email: profile.getEmail(),
      image: profile.getImageUrl(),
    };
  }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  return (
    <div className="container" /* onClick="onclick" */>
      <div className="top">Rooster AI</div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Please Sign In</h2>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        {/* <h2>&nbsp;</h2> */}
        <GoogleBtn outgoingApi="https://meharshjain.onrender.com" />
        <button
          style={{
            padding: "1rem 1.5rem",
            background: "#3745b5",
            color: "#fff",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="AppContainer">
      <Header />
      <div className="center">
        <div className="title">
            <i className="fa-solid fa-r fa-flip"></i>
            <i className="fa-solid fa-o fa-flip"></i>
            <i className="fa-solid fa-o fa-flip"></i>
            <i className="fa-solid fa-s fa-flip"></i>
            <i className="fa-solid fa-t fa-flip"></i>
            <i className="fa-solid fa-e fa-flip"></i>
            <i className="fa-solid fa-r fa-flip"></i>
        </div>
        <div className="sub_title"></div>
        <div className="btns">
          <a href="/Login">Login</a>
          <a href="/products">Products</a>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div> */
}
export default Home;
