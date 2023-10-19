import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbars } from "../components";
import { About, Contact, Posting, HomePage, LoginPage } from "../pages";
import Navbar from "./Navbar";
const MainContent = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);

  return (
    <>
      {loginStatus ? (
        <Navbars
          loginStatus={loginStatus}
          loginCbHandler={loginCbHandler}
        ></Navbars>
      ) : (
        <Navbars loginCbHandler={loginCbHandler}></Navbars>
      )}
    
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/posting" element={<Posting></Posting>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
      </Routes>
    </>
  );
};

export default MainContent;
