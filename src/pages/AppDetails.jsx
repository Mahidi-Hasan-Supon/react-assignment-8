import React from "react";
import { useParams } from "react-router";
import useApp from "../hooks/useApp";
import { RxDownload } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import like from "../assets/like.png";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { app, loading, error } = useApp();
  const ap = app.find((a) => String(a.id) === id);
  console.log(id, ap);
  if (loading) {
    return <p>Loading...</p>;
  }
  const { image, title, ratingAvg, downloads, reviews,ratings,description } = ap;
  return (
    <div>
      <div className="md:flex my-15 ml-10 gap-5">
        <div>
          <img src={image} className="w-[350px] h-[350px]" alt="" />
        </div>
        <div className="space-y-8">
          <h1 className="text-2xl font-bold ">{title}</h1>
          <div className="border-t border-gray-400 opacity-50"></div>
          <div className="flex items-center justify-center gap-8">
            <p>
              <RxDownload className="text-green-400 w-[40px] h-[40px]" />
              Downloads <br />
              <span className="text-2xl font-bold"> {downloads}</span>
            </p>
            <p>
              <FaStar className="text-[#FF8811] w-[40px] h-[40px]" />
              Average Ratings <br />
              <span className="text-2xl font-bold"> {ratingAvg}</span>
            </p>
            <p>
              <img src={like} className="w-[40px] h-[40px]" alt="" />
              Total Reviews <br />
              <span className="text-2xl font-bold"> {reviews}</span>
            </p>
          </div>
          <button className="btn bg-[#00D390]  text-white">
            Install Now (291 MB)
          </button>
        </div>
      </div>

      <div className="border-t opacity-50 border-gray-400 py-5 ml-7 mr-7 mx-auto"></div>

      {/* recharts */}
      <div className="w-8xl mx-auto ml-7 mr-7">
        <h1 className="text-2xl font-semibold my-3">Ratings</h1>
        <div className="bg-base-100  h-80 ">
          <ResponsiveContainer>
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={ratings}
            //   margin={{
            //     top: 20,
            //     right: 20,
            //     bottom: 20,
            //     left: 20,
            //   }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
              <Bar dataKey="count" barSize={20} fill="#FF8811" name=''/>
              <Line dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="border-t opacity-50 border-gray-400 py-5 ml-7 mr-7 mx-auto"></div>
      <div className="ml-7 mr-7 my-5"> 
        <p ><span className="text-xl font-semibold">Description</span> <br />
            <span className="opacity-50">{description}</span>
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
