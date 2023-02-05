import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Statisctics from "../components/Statisctics";
import Management from "../components/Management";
import Checkout from "../components/Checkout";
import Master from "../components/Master";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Statisctics />
      <Management />
      <Checkout />
      <Master />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Landing;
