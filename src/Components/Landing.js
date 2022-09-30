import React, { useEffect, useState } from "react";
import Header from "./Header";
import MarketUpdate from "./MarketUpdate";
import Features from "./Features";
import Application from "./Application";
import { useDispatch } from "react-redux/";
import { fetchCoins } from "../Redux/Coins/getCoinsAction";
import BlockchainNews from "./BlockchainNews";
import SubmitEmailsSection from "./SubmitEmailsSection";
import Footer from "./Footer";
import PushToTop from "./PushToTop";

const Landing = () => {
  const [showCount, setShowCount] = useState(10);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchCoins(showCount, 1));
  }, [showCount]);


  return (
    <>
      <PushToTop />
      <Header />
      <MarketUpdate update={setShowCount} count={showCount} />
      <Features />
      <Application />
      <BlockchainNews />
      <SubmitEmailsSection />
      <Footer />
    </>
  );
};

export default Landing;
