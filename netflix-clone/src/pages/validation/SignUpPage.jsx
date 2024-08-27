import React from "react";
import Header from "../../components/SignUpComponent/Header";
import Banner from "../../components/SignUpComponent/Banner";
import TvSection from "../../components/SignUpComponent/TvSection";
import DownloadInfo from "../../components/SignUpComponent/DownloadInfo";
import DeviceSection from "../../components/SignUpComponent/DeviceSection";
import ChildrenSection from "../../components/SignUpComponent/ChildrenSection";
import AnswerSection from "../../components/SignUpComponent/AnswerSection";
import Footer from "../../components/SignUpComponent/Footer";

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
