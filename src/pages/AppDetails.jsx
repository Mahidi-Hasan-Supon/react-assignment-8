import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApp from "../hooks/useApp";
import { RxDownload } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import like from "../assets/like.png";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ToastContainer, toast } from "react-toastify";
import appImg from "../assets/App.png";
import LoadingSpinner from "../compunents/LoadingSpinner";

const AppDetails = () => {
  
  const { id } = useParams();
  const { app, loading, error } = useApp();
  const ap = app.find((a) => String(a.id) === id);
  console.log(id, ap);

  // use state and local storage

  const [install, setInstall] = useState(false);
    
  useEffect(()=>{
      const appsInstalled = JSON.parse(localStorage.getItem('installed')) || []
    const alreadyInstalledApp = appsInstalled.find((app)=>app.id === ap?.id);
    if(alreadyInstalledApp){
      setInstall(true)
    }
  },[ap])
  const handleInstall = () => {
    if(!ap) return;
    // data in local storage
    const appsInstalled = JSON.parse(localStorage.getItem('installed')) || []
    const alreadyInstalledApp = appsInstalled.find((app)=>app.id === ap.id);
    if(!alreadyInstalledApp){
      appsInstalled.push(ap);
      localStorage.setItem("installed",JSON.stringify(appsInstalled));
        toast("Installed the app!!");
    }
   
  
     setInstall(true);
  };


  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (!ap) {
    return (
      <div>
        <div className="w-md mx-auto text-center my-5">
          <img src={appImg} alt="" />
          <h1 className="text-2xl font-semibold">OPPS!! APP NOT FOUND</h1>
          <p className="opacity-50">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <button className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            Go back
          </button>
        </div>
      </div>
    );
  }
  const { image, title, ratingAvg, downloads, reviews, ratings, description,size } =
    ap;
  
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
              <span className="text-2xl font-bold"> {downloads}M</span>
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
          <button
            onClick={handleInstall}
            className="btn bg-[#00D390]  text-white"
          >
            {install ? "Installed" :` Install Now (${size}) MB`}
          </button>
        </div>
      </div>

      <div className="border-t opacity-50 border-gray-400 py-5 ml-7 mr-7 mx-auto"></div>

      {/* recharts */}
      <div className="w-8xl mx-auto ml-7 mr-7">
        <h1 className="text-2xl font-semibold my-3">Ratings</h1>
        <div className="bg-gray-100  h-80 ">
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
              <Bar dataKey="count" barSize={20} fill="#FF8811" name="" />
              <Line dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="border-t opacity-50 border-gray-400 py-5 ml-7 mr-7 mx-auto"></div>
      <div className="ml-7 mr-7 my-5">
        <p>
          <span className="text-xl font-semibold">Description</span> <br />
          <span className="opacity-50">{description}</span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
