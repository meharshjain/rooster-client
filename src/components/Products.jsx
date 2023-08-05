import React, { useState, useEffect } from "react";
import "../css/products.css";
import Header from "./Header";
function Product() {
  return (
    <div className="AppContainer">
      <header className="masthead" style={{ padding: "0px" }}>
        <Header />
        <div className="container h-100" style={{ background: "transparent" }}>
          <div className="row h-10align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end mb-4 page-title">
              <h3 className="text-white">
                <i className="fa-solid fa-w fa-flip"></i>
                <i className="fa-solid fa-e fa-flip"></i>
                <i className="fa-solid fa-l fa-flip"></i>
                <i className="fa-solid fa-c fa-flip"></i>
                <i className="fa-solid fa-o fa-flip"></i>
                <i className="fa-solid fa-m fa-flip"></i>
                <i className="fa-solid fa-e fa-flip"></i>
                &nbsp;&nbsp;
                <i className="fa-solid fa-t fa-flip"></i>
                <i className="fa-solid fa-o fa-flip"></i>
                &nbsp;&nbsp;
                <i className="fa-solid fa-r fa-flip"></i>
                <i className="fa-solid fa-o fa-flip"></i>
                <i className="fa-solid fa-o fa-flip"></i>
                <i className="fa-solid fa-s fa-flip"></i>
                <i className="fa-solid fa-t fa-flip"></i>
                <i className="fa-solid fa-e fa-flip"></i>
                <i className="fa-solid fa-r fa-flip"></i>
              </h3>
            </div>
            <div className="container" style={{ background: "transparent" }}>
              <form action="/productfilter" method="post">
                <div
                  className=" input-box underline"
                  style={{ marginLeft: "35%" }}
                >
                  <input
                    className="form-control"
                    style={{ maxWidth: "fit-content" }}
                    id="demo"
                    type="text"
                    name="gender"
                    placeholder="Search By Name/Type"
                    size="40"
                  />
                  <button
                    style={{
                      left: "32%",
                      top: "11px",
                      position: "absolute",
                      background: "transparent",
                      border: "0px",
                    }}
                  >
                    {" "}
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Product;
