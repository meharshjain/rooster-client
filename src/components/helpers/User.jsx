import React, { useState, useEffect } from "react";
function User() {
  const [sessionUser, setSessionUser] = useState("");
  const userHomePage = async function test() {
    try {
      const res = await fetch("/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = await res.json();
      setSessionUser(user);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    userHomePage();
  }, []);
  if (sessionUser) {
    return (
      <>
        <div className="subnav">
          <button className="subnavbtn">
            Services<i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div className="subnav-trapezoid">
              <a href="/admin">Admin Panel</a>
              <a href="/partner_with_us">Join As MERCHANT</a>
              <a href="/contactus">ContactUs</a>
              <a href="/logout">LOGOUT</a>
            </div>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">
            {sessionUser.firstname} {sessionUser.lastname}
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div className="subnav-trapezoid">
              <a href="/cart">My Cart</a>
              <a href="/orders">my Orders</a>
              <a href="/myaccount">MY Account</a>
              <a href="/logout">LOGOUT</a>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="subnav">
          <button className="subnavbtn">
            Services<i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div className="subnav-trapezoid">
              <a href="/login">SignIn</a>
              <a href="/register">SignUp</a>
              <a href="/partner_with_us">Join As MERCHANT</a>
              <a href="/contactus">ContactUs</a>
            </div>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">
            <i className="fa-solid fa-e fa-flip"></i>
            &nbsp;
            <i className="fa-solid fa-k fa-flip"></i>
            <i className="fa-solid fa-a fa-flip"></i>
            <i className="fa-solid fa-r fa-flip"></i>
            <i className="fa-solid fa-t fa-flip"></i>
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div className="subnav-trapezoid">
              <a href="#">FaceBook</a>
              <a href="#">Instagram</a>
              <a href="#">mail Us</a>
              <a href="/contactus">ContactUs</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default User;
