import React from "react";
import Navbar from "../compunents/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../compunents/Footer";
import Error from "../pages/Error";
import useApp from "../hooks/useApp";
import LoadingSpinner from "../compunents/LoadingSpinner";

const Root = () => {
    const {loading} = useApp()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
     {loading?<LoadingSpinner></LoadingSpinner>: 
     <div className="flex-1">
        <Outlet></Outlet>
         </div>}
        <Footer></Footer>
     
    </div>
  );
};

export default Root;
