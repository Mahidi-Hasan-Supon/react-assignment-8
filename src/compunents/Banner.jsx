import React from "react";
import playImg from "../assets/play.png";
import appImg from "../assets/App-Store.png";
import heroImg from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="text-center my-4">
          <h1 className="text-5xl opacity-90 font-semibold">
            We Build <br /> <span className="text-purple-600">Productive</span>{" "}
            Apps
          </h1>
          <p className="opacity-50 mt-2">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="mt-4 space-x-3">
            <button className="btn">
              <img src={playImg} className="h-[20px] w-[]" alt="" />
              Google Play
            </button>
            <button className="btn ">
              <img src={appImg} alt="" className="h-[20px] w-[]" />
              App Store
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img src={heroImg} alt="" />
          </div>
          <div className="h-[400px] w-full bg-linear-65 from-[#632EE3] to-[#9F62F2] py-20 my-10">
             <div className="">
                <h1 className="text-white text-5xl font-bold text-center">Trusted by Millions, Built for You</h1>
                <div className="flex justify-center gap-20 py-10">
                    <div className="text-white text-center space-y-3">
                        <h1>Total Downloads</h1>
                        <p className="text-5xl font-bold ">29.6M</p>
                        <p>21% more than last month</p>
                    </div>
                    <div className="text-white text-center space-y-3">
                        <h1>Total Reviews</h1>
                        <p className="text-5xl font-bold ">906K</p>
                        <p>46% more than last month</p>
                    </div>
                    <div className="text-white text-center space-y-3">
                        <h1>Active Apps</h1>
                        <p className="text-5xl font-bold ">132+</p>
                        <p>31 more will Launch</p>
                    </div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
