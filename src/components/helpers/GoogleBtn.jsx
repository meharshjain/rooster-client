import React from "react";
import GoogleLogin from "react-google-login";

function Google() {
  const onSuccess = async (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log("Name: " + profile.getGivenName());
    console.log("Family Name: " + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
  };
  const onFailure = (error) => {
    console.log(error);
  };
  return (
    <div id="my-signin2">
      <GoogleLogin
        clientId="769480983049-vf9d6odjq593ahusob4198b8ifbfqe14.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
}

export default Google;
