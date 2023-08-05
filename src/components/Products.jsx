import React, { useState, useEffect } from "react";
import "../css/products.css";
import Header from "./Header";
import _ from "lodash";
function Product() {
  const [productList, setSessionUser] = useState("");
  const userHomePage = async function test() {
    const res = await fetch("/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await res.json();
    if(user.Error) return window.location.replace('/login')
    setSessionUser(user);
  };
  useEffect(() => {
    userHomePage();
  }, []);
  function addProductToCart(self) {
    alert("Product add to cart");
    document.getElementById("jumpToCart").hidden = false;
  }
  function productsView() {
    var data = [];
    for (let i = 0; i < productList.length; i++) {
      data.push(
        <div
          class={
            "col-md-8 col-lg-3 col-xl-3 " + productList[i].type.replace(" ", "")
          }
        >
          <div id="product-1" class="single-product ">
            <div class="part-1">
              <img
                src={productList[i].pichref}
                class="img-fluid rounded thumbnail-image"
              />
              <span class="new">new</span>
              <ul class="inputs">
                <li>
                  <a>
                    <form
                      id="form2"
                      action={"/cart/" + productList[i]._id}
                      method="post"
                      onsubmit="cartvisible()"
                    >
                      <input type="number" min="1" placeholder="1" style={{display:"none"}}/>
                      <input
                        type="image"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlERyASQaShn0U-8s0kXtk_ZfeuDpnyrGibi15tCAWTsgBuojzR2pAF0i49sNRCWeHQU&usqp=CAU"
                        alt="Submit"
                        width="35"
                        height="35"
                        onClick={addProductToCart}
                      />
                      <input
                        type="image"
                        src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/199_Like_logo_logos-512.png"
                        alt="Submit"
                        width="35"
                        height="35"
                      />
                    </form>
                  </a>
                </li>
              </ul>
            </div>
            <h3 class="product-title">{productList[i].name}</h3>
            <div class="part-2">
              <h4 class="product-price">Rs.{productList[i].price}</h4>
              <h4 class="product-price">{productList[i].description}</h4>
            </div>
          </div>
        </div>
      );
      if (i === productList.length - 1) return data;
    }
  }
  function filterProducts(self) {
    var filters = _.groupBy(productList, "type");
    _.forEach(Object.keys(filters), function (type) {
      var selector = self.currentTarget.id;
      if (type === selector) selector = "All";
      _.forEach(
        document.getElementsByClassName(type.replace(" ", "")),
        function (data) {
          data.style.display = selector === "All" ? "block" : "none";
        }
      );
    });
  }
  function getItemsFilter() {
    var template = [];
    var filters = _.groupBy(productList, "type");
    for (let i = 0; i < Object.keys(filters).length; i++) {
      var filter = Object.keys(filters)[i];
      template.push(
        <>
          <input
            id={filter}
            type="radio"
            name="gender"
            value={filter}
            onClick={filterProducts}
          />
          <label for={filter} id={filter}>
            {filter}
          </label>
        </>
      );
      if (template.length === Object.keys(filters).length) {
        return template;
      }
    }
  }
  if (productList)
    return (
      <div className="AppContainer">
        <header className="masthead" style={{ padding: "0px" }}>
          <Header />
          <div
            className="container h-100"
            style={{ background: "transparent" }}
          >
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
                  <i className="fa-solid fa-e fa-flip"></i>
                    &nbsp;
                    <i className="fa-solid fa-k fa-flip"></i>
                    <i className="fa-solid fa-a fa-flip"></i>
                    <i className="fa-solid fa-r fa-flip"></i>
                    <i className="fa-solid fa-t fa-flip"></i>
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
                      value=""
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
        <section class="section-products container">
          <div id="jumpToCart" class="sticky" hidden="hiddden">
            <a href="/cart"> Jump To Cart</a>
          </div>
          <input
            type="text"
            id="demo1"
            name="gender"
            value="=n"
            hidden="hidden"
          />
          <input
            type="text"
            id="dem"
            name="gender"
            value="=product.type"
            hidden="hidden"
          />
          <form id="form1" action="/productfilter" method="post">
            <span class="details">
              {" "}
              <b>Filters: </b>
            </span>
            <input
              id="All"
              type="radio"
              name="gender"
              value="All"
              onClick={filterProducts}
            />
            <label for="All">All</label>
            {getItemsFilter()}
          </form>
          <h2>Popular Products</h2>
          <div class="row">{productsView()}</div>
        </section>
      </div>
    );
}
export default Product;
