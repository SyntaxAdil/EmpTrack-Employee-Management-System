import React from "react";
import Navbar from "../components/navbar/Navbar";
import EditPopup from "../components/popup/EmployeePopup";
import Employee from "../components/Employee/Employee";
import DltPopup from "./../components/popup/DltPopup";
import Footer from './../components/foooter/Footer';
import ImagePopup from './../components/popup/ImagePopup';

const Home = () => {
  return (
    <div className="w-full min-w-full mt-4 flex flex-col  items-center justify-between min-h-screen space-y-10 ">
      <Navbar />
      <div className="flex-1 max-w-5xl mx-auto container px-4 overflow-x-hidden">

      <Employee />
      </div>
      <Footer />
      <>
        <EditPopup />
        <ImagePopup />
        <DltPopup />
      </>
    </div>
  );
};

export default Home;
