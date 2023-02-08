import React from "react";

import User from "../assets/user.png";
import Finance from "../assets/finance.png";
import Data from "../assets/data.png";

const Hero = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
            First payment solution Tailored to your needs
            </span>
          </h2>
          <p className="text-md mt-4 text-gray-400">
          We are here for you. We give you the most convenient way to receive payments, 
          Manage your bills and save all from one payment gateway
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24">
          <img src={User} className="w-1/2 rounded-lg" alt="Tree" />
          <div>
            <img src={Finance} className="mb-8 rounded-lg" alt="Tree" />
            <img src={Data} className="rounded-lg" alt="Tree" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
