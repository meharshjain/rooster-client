import React, { useState, useEffect } from "react";
import Header from "./Header";
import _ from "lodash";
function Cart() {
  const [productList, setSessionUser] = useState("");
  const [cartList, setCartList] = useState("");
  const [orderList, setOrderList] = useState("");
  const userHomePage = async function test() {
    const resp = await fetch("/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await fetch("/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const products = await resp.json();
    const cart = await res.json();
    setCartList(cart);
    setSessionUser(products);
  };
  useEffect(() => {
    userHomePage();
  }, []);
  async function checkout() {
    const res = await fetch("/orderpost/" + cartList._id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async function (res) {
      const order = await res.json();
      setOrderList(order);
    });
  }
  function calculateSubtotal() {
    var subtotal = 0;
    for (let i = 0; i < cartList.products.length; i++) {
      subtotal =
        subtotal + cartList.products[i].price * cartList.products[i].quantity;
      if (i === cartList.products.length - 1) {
        return subtotal;
      }
    }
  }
  function productsView(productList, cartList) {
    var data = [];
    for (let i = 0; i < cartList.products.length; i++) {
      var cartProductid = cartList.products[i].product;
      var productModel = _.find(productList, function (product, keys) {
        if (product._id === cartProductid) {
          return true;
        }
      });
      if (cartProductid && productModel) {
        data.push(
          <div class="col-md-8 col-lg-3 col-xl-3">
            <div id="product-1" class="single-product ">
              <form
                id="form2"
                action={"/deletecartproduct/" + cartList.products[i].product}
                method="post"
              >
                <div class="part-1">
                  <img
                    src={productModel.pichref}
                    class="img-fluid rounded thumbnail-image"
                  />
                  <span class="new">new</span>
                  <ul class="inputs">
                    <li>
                      <a>
                        <input
                          type="image"
                          src="https://e7.pngegg.com/pngimages/822/987/png-clipart-red-x-illustration-american-red-cross-international-red-cross-and-red-crescent-movement-christian-cross-wrong-angle-logo-thumbnail.png"
                          alt="Submit"
                          width="35"
                          height="35"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 class="product-title">{cartList.products[i].name}</h3>
                <div class="part-2">
                  <h4 class="product-price">
                    Rs.{cartList.products[i].price} X{" "}
                    {cartList.products[i].quantity}
                  </h4>
                  <h4 class="product-price">
                    = Rs.
                    {cartList.products[i].price * cartList.products[i].quantity}
                  </h4>
                </div>
              </form>
            </div>
          </div>
        );
      }
      if (i === cartList.products.length - 1) {
        console.log(data);
        return data;
      }
    }
  }
  if (productList && cartList)
    return (
      <div className="AppContainer">
        <header className="masthead" style={{ padding: "0px" }}>
          <Header />
          <div class="sticky" id="myH1">
            <button
              onClick={checkout}
              style={{ background: "yellowgreen", padding: "5px" }}
            >
              Place Order Rs.{calculateSubtotal()}
            </button>
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
          <h2>Popular Products</h2>
          <div class="row">{productsView(productList, cartList)}</div>
        </section>
      </div>
    );
}
export default Cart;
