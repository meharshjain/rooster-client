import React, { useState, useEffect } from "react";
import Header from "./Header";
import _ from "lodash";
import "../css/myaccount.css";
function Cart() {
  function toggleView(self) {
    _.forEach(
      ["myaccount_account", "myaccount_security", "myaccount_admin"],
      function (value) {
        _.forEach(document.getElementsByClassName(value), function (className) {
          className.style.display =
            className.id === self.currentTarget.id ? "block" : "none";
        });
      }
    );
  }
  const [currentUser, setSessionUser] = useState("");
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
  return (
    <div className="AppContainer">
      <Header />
      <section className="">
        <div className="container">
          <h2 className="mb-5">My profile</h2>
          <div className="bg-white shadow rounded-lg d-block d-sm-flex">
            <div className="profile-tab-nav border-right">
              <div className="p-4">
                <div className="img-circle text-center mb-3">
                  <img
                    src="img.jpg"
                    alt="Image"
                    className="shadow"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                <h4 className="text-center">{currentUser.username}</h4>
              </div>
              <div
                className="nav flex-column nav-pills"
                style={{ backgroundColor: "black" }}
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link"
                  id="myaccount_account"
                  data-toggle="pill"
                  onClick={toggleView}
                  value="account"
                  role="tab"
                  aria-controls="account"
                  aria-selected="true"
                >
                  <i className="fa fa-home text-center mr-1"></i>Account
                </a>

                <a
                  className="nav-link disabled"
                  id="myaccount_password"
                  data-toggle="pill"
                  href="#"
                  role="tab"
                  aria-controls="password"
                  aria-selected="false"
                >
                  <i className="fa fa-key text-center mr-1"></i>Password
                </a>

                <a
                  className="nav-link"
                  id="myaccount_security"
                  data-toggle="pill"
                  href="#security"
                  onClick={toggleView}
                  value="security"
                  role="tab"
                  aria-controls="security"
                  aria-selected="false"
                >
                  <i className="fas fa-user-minus"></i> Delete Account
                </a>

                <a
                  className="nav-link"
                  id="myaccount_admin"
                  data-toggle="pill"
                  href="#admin"
                  role="tab"
                  onClick={toggleView}
                  value="admin"
                  aria-controls="admin"
                  aria-selected="false"
                >
                  <i className="fa fa-user text-center mr-1"></i>Admin Only
                </a>

                <a
                  className="nav-link disabled"
                  id="notification-tab"
                  data-toggle="pill"
                  href="#notification"
                  role="tab"
                  aria-controls="notification"
                  aria-selected="false"
                >
                  <i className="fa fa-bell text-center mr-1"></i>Notification
                </a>
              </div>
            </div>
            <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div
                className="myaccount_account"
                id="myaccount_account"
                role="tabpanel"
                aria-labelledby="account-tab"
              >
                <h3 className="mb-4">Account Settings</h3>
                <form action="/myaccount" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={currentUser.firstname}
                          disabled="disabled"
                        />
                        <h6 style={{ color: "red" }}>
                          *you can not change this
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastname"
                          value={currentUser.lastname}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          type="text"
                          className="form-control"
                          value={currentUser.username}
                          disabled="disabled"
                        />
                        <h6 style={{ color: "red" }}>
                          *you can not change this
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="number"
                          value={currentUser.number}
                          required="required"
                          maxlength="10"
                        />
                        <h6>current number: +91 {currentUser.number}</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Birthday</label>
                        <input
                          className="form-control"
                          type="date"
                          name="dob"
                          value={currentUser.dob}
                          id="example-date-input"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>One Time Payment</label>
                        <input
                          type="text"
                          className="form-control"
                          value={currentUser.paid}
                          disabled="disabled"
                        />
                        <h6 style={{ color: "red" }}>
                          *you can not change this
                        </h6>

                        <label>Gender</label>
                        <div className="form-group">
                          <label>male</label>
                          <input type="radio" name="gender" value="male" />
                          <label>female</label>
                          <input type="radio" name="gender" value="female" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-light">Update Info</button>
                    <a href="/" className="btn btn-dark">
                      Home
                    </a>
                    <a href="/logout" className="btn btn-light">
                      logout
                    </a>
                    <a href="/checkout" className="btn btn-dark fas fa-donate">
                      Upgrade
                    </a>
                  </div>
                </form>
              </div>
              <div
                className="myaccount_security"
                id="myaccount_security"
                role="tabpanel"
                aria-labelledby="security-tab"
                style={{display:"none"}}
              >
                <h3 className="mb-4">DELETE ACCOUNT</h3>
                <form action="/deleteuser" method="POST"></form>
                <h6 style={{ color: "red" }}>
                  *you can undo this If you want to leave go to home
                </h6>
                <div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <form style={{ textAlign: "center" }}>
                    <a href="/myaccount" className="btn btn-light bg-warning">
                      DELETE ACCOUNT
                    </a>
                    <br />
                    <a href="/" className="btn btn-dark">
                      Home
                    </a>
                    <br />
                    <a href="/logout" className="btn btn-light">
                      logout
                    </a>
                    <br />
                    <a href="/checkout" className="btn btn-dark fas fa-donate">
                      Upgrade
                    </a>
                    <br />
                  </form>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div
                className="myaccount_admin"
                id="myaccount_admin"
                role="tabpanel"
                aria-labelledby="admin-tab"
                style={{display:"none"}}
              >
                <h3 className="mb-4">Admin Only</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        value={currentUser.username}
                        disabled="disabled"
                      />
                      <h6 style={{ color: "red" }}>*you can not change this</h6>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Admin Access</label>
                      <input
                        type="text"
                        className="form-control"
                        value={currentUser.isAdmin}
                        disabled="disabled"
                      />
                      <h6 style={{ color: "red" }}>*you can not change this</h6>
                    </div>
                  </div>
                </div>
                <div>
                  <a href="/admin" className="btn btn-dark">
                    Access
                  </a>
                  <a href="/logout" className="btn btn-light">
                    logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Cart;
