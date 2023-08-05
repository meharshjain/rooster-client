import React from "react";
import "../css/home.css";
import Header from "./Header";

function Home() {
  return (
    <div className="AppContainer img3">
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
    </div>
  );
}

export default Home;
