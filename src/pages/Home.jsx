import React from "react";
import Banner from "../compunents/Banner";
import useApp from "../hooks/useApp";
import EightApp from "../compunents/EightApp";
import { Link } from "react-router";
import LoadingSpinner from "../compunents/LoadingSpinner";

const Home = () => {
  const { app, loading, error } = useApp();
  const eightApp = app.slice(0, 8);
  console.log(eightApp);
 if(loading){
  return <LoadingSpinner></LoadingSpinner>
 }
  return (
    <div className="my-5">
      <Banner></Banner>
      <div>
        <h1 className="text-3xl font-bold text-center">Trending Apps</h1>
        <p className="text-center opacity-40 my-4">
          Explore All Trending Apps on the Market developed by us
        </p>
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <div className="grid md:grid-cols-4 gap-10 my-10">
            {eightApp.map((eight) => (
              <EightApp key={eight.id} eight={eight}></EightApp>
            ))}
          </div>
        )}
        <div className="flex justify-center">
          <Link
            to="/apps"
            className="btn text-center  text-white  bg-linear-65 from-[#632EE3] to-[#9F62F2]"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
