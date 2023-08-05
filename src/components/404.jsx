import React from "react";
import "../css/404.css";
import Header from "./Header";
function App() {
  return (
    <div className="AppContainer img3">
      <Header />
      <div className="errorpage">
        <h1>404 Error Page</h1>
        <section className="error-container">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </section>
        <div className="link-container">
          <a href="/" className="more-link">
            Visit the Home Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
