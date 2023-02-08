import React from "react";

const Faqs = () => {
  return (
    <div>
      <div className="max-w-screen-xl p-8 mx-auto">
        <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">
          FAQs
        </h2>
        <ul class="flex flex-wrap items-start gap-8">
        <li class="w-2/5">
            <p class="text-lg font-medium leading-6 text-gray-900">
                How Do I accept payments?
            </p>
            <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  When you register with rhonpesa you are provided with a unique merchant Id and you customers will us ussd *640*merchant_id*amount#. Fast and seamless.
                </p>
            </p>
        </li>
        <li class="w-2/5">
            <p class="text-lg font-medium leading-6 text-gray-900">
                How do I add my Bills?
            </p>
            <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Login to your account and add bills like insurance, stock purchasing, loans. A small percentage will be auto-deducted per transaction to pay for your monthly bills.
                </p>
            </p>
        </li>
        <li class="w-2/5">
            <p class="text-lg font-medium leading-6 text-gray-900">
                How do I grow my wallet?
            </p>
            <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  As your customers pay you, you wallet grows. You cam also deposit from mpesa or bank directly.
                </p>
            </p>
        </li>
        <li class="w-2/5">
            <p class="text-lg font-medium leading-6 text-gray-900">
                Why should I use Rhonpesa to accept payments?
            </p>
            <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Rhonpesa is the fastest and most complete payment solution. Ypu can accept payment, manage your bills, boost your credit score and do shopping all in one payment gateway.
                </p>
            </p>
        </li>
        <li class="w-2/5">
            <p class="text-lg font-medium leading-6 text-gray-900">
                Can I use money in my Rhonpesa account for shopping?
            </p>
            <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Yes it is possible, seamless and free. Our technology allows our customers to spend money directly in rhonpesa wallet to do shopping.
                </p>
            </p>
        </li>
        <li class="w-2/5">
            <p class="text-lg font-medium leading-6 text-gray-900">
                Can I transfer money in Rhonpesa to bank?
            </p>
            <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Money in rhonpesa wallet can be transferred to bank, to other line or you can widthraw.
                </p>
            </p>
        </li>
    </ul>
      </div>
    </div>
  );
};

export default Faqs;
