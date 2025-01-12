import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pt-10 px-10 md:px-20 lg:px-40">{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
