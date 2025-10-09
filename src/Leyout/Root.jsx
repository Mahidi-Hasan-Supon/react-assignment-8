import Navbar from "../compunents/Navbar";
import { Outlet } from "react-router";
import Footer from "../compunents/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>

      <div className=" flex-1 bg-gray-100">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
