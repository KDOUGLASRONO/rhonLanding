import React from "react";

const Statisctics = () => {
  return (
    <div>
      <section className="bg-indigo-800">
        <br />
        <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">2179</span>
              <span className="text-indigo-200">+</span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
              Merchants onboarded
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">200,457</span>
              <span className="text-indigo-200">+</span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
              Transactions processed successfully
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">10,000</span>
              <span className="text-indigo-200">+</span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
              Transactions Per Minute
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">12</span>
              <span className="text-indigo-200">+</span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
              months in business
            </p>
          </div>
        </div>
        <div className="flex p-4 mx-auto mt-4 w-52">
          <button
            type="button"
            className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Join
          </button>
        </div>
        <br />
      </section>
    </div>
  );
};

export default Statisctics;
