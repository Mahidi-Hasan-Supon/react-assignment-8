import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";
import useApp from "../hooks/useApp";
import LoadingSpinner from "../compunents/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import appImg from "../assets/App.png";


const Installation = () => {
  const { loading } = useApp();
  const [installed, setInstalled] = useState([]);
  const [sort, setSort] = useState("none");

  useEffect(() => {
    const savedApp = JSON.parse(localStorage.getItem("installed")) || [];
    if (savedApp) setInstalled(savedApp);
  }, []);

  const setSortApp = () => {
    // const val = parseInt(installed.downloads.split('m').join('').split('+').join(''))
    if (sort === "down-dsc") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    }
    if (sort === "down-asc") {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installed;
    }
  };
//   if (setSortApp().length === 0)
//     return (
//       <div>
//         <div className="w-md mx-auto text-center my-5">
//           <img src={appImg} alt="" />
//           <h1 className="text-2xl font-semibold">OPPS!! APP NOT FOUND</h1>
//           <p className="opacity-50">
//             The App you are requesting is not found on our system. please try
//             another apps
//           </p>
//           <button className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
//             Go back
//           </button>
//         </div>
//       </div>
//     );

  const removeApp = (id) => {
    const filtered = installed.filter((app) => app.id !== id);
    setInstalled(filtered);
    localStorage.setItem("installed", JSON.stringify(filtered));
    toast("UnInstalled The App!!");
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  console.log(installed);

  return (
    <div className="my-10">
      <div className="md:w-xl text-center mx-auto">
        <h1 className="text-2xl font-bold">Your Installed Apps</h1>
        <p className="opacity-70">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between my-5 ml-7 mr-7">
        <h1 className="text-xl font-semibold">
          ({installed.length}) Apps Found
        </h1>
        <label htmlFor="">
          <select className="select" onChange={(e) => setSort(e.target.value)}>
            <option value="none">Sort By Size</option>
            <option value="down-dsc">High to Low</option>
            <option value="down-asc">Low to High</option>
          </select>
        </label>
      </div>
      {setSortApp().map((a) => (
        <div key={a.id} className=" bg-white shadow ml-7 mr-7 rounded-lg my-5">
          <div className="md:flex">
            <div>
              <img
                className="h-[80px] w-[80px] ml-2 py-1"
                src={a.image}
                alt=""
              />
            </div>
            <div className="flex md:justify-between items-center ml-5">
              <div className="">
                <h1 className="font-semibold">{a.title}</h1>
                <div className="flex gap-5">
                  <p className="text-[#00D390] flex items-center gap-1">
                    {" "}
                    <RxDownload /> {a.downloads}M
                  </p>
                  <p className="text-[#FF8811] flex items-center gap-1">
                    <FaStar></FaStar> {a.ratingAvg}
                  </p>
                  <p className="opacity-60">{a.size}MB</p>
                </div>
              </div>
              <div className="md:ml-320 ml-10">
                <button
                  onClick={() => removeApp(a.id)}
                  className="btn bg-[#00D390] text-white"
                >
                  {" "}
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Installation;
