import React from "react";

import USSD from "../assets/ussdd.png";

const Management = () => {
  return (
    <div>
      <div className="relative p-4 bg-white dark:bg-gray-800">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 md:pl-20">
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
              Intergrated payment solutions
            </h4>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      
                        <img src="https://img.icons8.com/3d-fluency/94/null/coins.png"/>
                      
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Accept payments
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    Fastest and most convenient way to accept payments from yor Customers
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                      <img src="https://img.icons8.com/3d-fluency/94/null/money.png"/> 
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Manage your bills
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      Manage all your bills on one platform. The most convenient way to pay for your bills and stock.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                      <img src="https://img.icons8.com/3d-fluency/94/null/coin-wallet.png"/> 
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Digital wallet
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      We create a free digital wallet for every merchant where you can Accept payments, Pay for your bills and shopping. Widhraw your money anytime, anywhere.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
            <img
              src={USSD}
              alt="illustration"
              className="relative w-auto mx-auto rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
