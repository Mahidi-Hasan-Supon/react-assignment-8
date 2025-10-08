import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router";

const EightApp = ({ eight }) => {
  console.log(eight);
  const { image, title, downloads, ratingAvg } = eight;
  return (
    <>
    <div className="card bg-base-100 w-96 shadow-sm w-8xl mx-auto">
      <figure className="h-70 rounded-xl my-5">
        <img src={image} className="w-full object-cover p-5 my-5" alt="Apps" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Title: {title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <div className="card-actions justify-between">
          <div className="text-[#00D390] bg-gray-100  w-[60px] flex items-center justify-between gap-1 rounded-md">
            <FaArrowDown /> {downloads}
          </div>
          <div className="bg-[#FF881130] text-[#FF8811] w-[50px] flex items-center justify-center gap-1 rounded-md items-center">
            <FaStar /> {ratingAvg}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EightApp;
