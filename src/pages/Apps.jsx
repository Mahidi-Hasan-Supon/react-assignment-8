import React, { useEffect, useState } from "react";
import useApp from "../hooks/useApp";
import { FaStar } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router";
import LoadingSpinner from "../compunents/LoadingSpinner";
const Apps = () => {
  const { app,loading,error } = useApp();
  console.log(app);
  const [search, setSearch] = useState("");
  const [isSearch,setIsSearch] = useState(false)
  const [appSearch,setAppSearch] = useState([])
  useEffect(()=>{
    if(!search.trim()){
      setAppSearch(app);
      setIsSearch(false);
      return;
    }
    setIsSearch(true);
    const timeout = setTimeout(()=>{
    const trm = search.trim().toLocaleLowerCase();
  const filtered = 
    app.filter((a) => a.title.toLocaleLowerCase().includes(trm));
    setAppSearch(filtered);
    setIsSearch(false);
    },800);
    return ()=> clearTimeout(timeout)
  },[search,app]);
  if(error){
    return(
      <div>someting went wrong</div>
    )
  }

   if(loading){
    return <LoadingSpinner></LoadingSpinner>
   }
  console.log(appSearch);
  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Our All Applications</h1>
        <p className="opacity-55">
          Explore All Apps on the Market developed by us. We code for Millions{" "}
        </p>
      </div>
      <div className="flex md:justify-between mx-8 space-y-4 my-3">
        <h1 className="text-xl font-semibold">
          ({appSearch.length}) Apps Found
        </h1>
        <label className="input">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search App"
          />
        </label>
      </div>

      {isSearch?(<LoadingSpinner></LoadingSpinner>): appSearch.length === 0 ? (
        <p className="grid-cols-1 text-center text-5xl font-bold text-cyan-400">
          No App Found
        </p>
      ) : (
        <div className="grid md:grid-cols-4 w-8xl mx-auto gap-3 my-10">
          {appSearch.map((ap) => (
            <Link to={`/appdetails/${ap.id}`} className="card bg-base-100 w-96 shadow-sm w-8xl mx-auto">
              <figure className="h-70 rounded-xl my-5">
                <img
                  src={ap.image}
                  className="w-full object-cover p-5 my-5"
                  alt="Apps"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Title: {ap.title}
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className="card-actions justify-between">
                  <div className="text-[#00D390] bg-gray-100  w-[60px] flex items-center justify-between gap-1 rounded-md">
                    <FaArrowDown /> {ap.downloads}
                  </div>
                  <div className="bg-[#FF881130] text-[#FF8811] w-[50px] flex items-center justify-center gap-1 rounded-md items-center">
                    <FaStar /> {ap.ratingAvg}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-3">
        <button
          to="/apps"
          className="btn text-center  text-white  bg-linear-65 from-[#632EE3] to-[#9F62F2]"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Apps;
