import React, { Component } from "react";
import "../css/home.css";
import "../css/header.css";
import $ from "jquery";
import UserName from "./helpers/User";
class Header extends Component {
  componentDidMount() {
    $(".expandHome").mouseover(function () {
      $(".sub-home").css({
        display: "block",
      });
    });
    $(".subnavbtn").mouseover(function () {
      $(".sub-home").css({
        display: "none",
      });
    });

    $("#trapezoid")
      .mouseleave(function () {
        $("#trapezoid").css({
          "margin-top": "-53px",
        });
        $(".sub-home").css({
          display: "none",
        });
      })
      .mouseenter(function () {
        $("#trapezoid").css({
          "margin-top": "-10px",
        });
      });
  }
  render() {
    return (
      <>
        <nav className="z">
          <div id="trapezoid">
            <a className="sub-home" href="/tour">
              Explore More
            </a>
            <a href="/" className="expandHome">
              Home
            </a>
            <div className="subnav">
              <button className="subnavbtn">
                Get Food<i className="fa fa-caret-down"></i>
              </button>
              <div className="subnav-content">
                <div id="subnav-trapezoid">
                  <a href="">SORT BY</a>
                  <a href="/products">PRODUCT</a>
                  <a href="#Clients">RESTAURANT</a>
                  <a href="#Clients">TAKEAWAY/DELIVERY</a>
                </div>
              </div>
            </div>
            <UserName username={true} faliure={"rooster"} />
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
