import React from "react";
import Header from "./SignUpComponent/Header";
import Banner from "./SignUpComponent/Banner";
import TvSection from "./SignUpComponent/TvSection";
import DownloadInfo from "./SignUpComponent/DownloadInfo";
import DeviceSection from "./SignUpComponent/DeviceSection";
import ChildrenSection from "./SignUpComponent/ChildrenSection";
import AnswerSection from "./SignUpComponent/AnswerSection";
import Footer from "./SignUpComponent/Footer";

function SignUpPage() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <TvSection />
      <DownloadInfo />
      <DeviceSection />
      <ChildrenSection />
      <AnswerSection />
      <Footer />
    </React.Fragment>
  );
}

export default SignUpPage;
