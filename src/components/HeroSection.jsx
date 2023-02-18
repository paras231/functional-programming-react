import React from "react";
import mask from  "../assets/Mask.png";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto mt-10 ">
        <div className="lg:grid  grid-cols-2  gap-x-40  ">
          <div className="box-border">
            <div className="md:w-3/6  p-8 ml-4 text-justify text-custom-blue font-bold">
              A high-quality solution for those who want a beautiful startup
              website quickly
            </div>
            {/* form div */}
            <div className="flex flex-col gap-4 p-8 ">
              <form className="flex flex-col gap-4 p-4">
                <input
                  type="text"
                  placeholder="Your Email"
                  className=" rounded-xl placeholder:text-slate-400 border-solid border-2 border-border-color pl-4 w-3/5"
                />
                 <input
                  type="text"
                  placeholder="Your Password"
                  className="rounded-xl placeholder:text-slate-400 border-solid border-2 border-border-color pl-4 w-3/5"
                />
              </form>
            </div>
          </div>
          <div className="box-border">
          <img src={mask} alt="mask" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
