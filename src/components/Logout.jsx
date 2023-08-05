import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
function Logout() {
  const [sessionUser, setSessionUser] = useState("");
  const userHomePage = async function test() {
    try {
      const res = await fetch("/logout", {
        method: "POST",
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
  if (!sessionUser) {
    return <Navigate to="/" />;
  }
  return <Navigate to="/logout" />;
}
export default Logout;
