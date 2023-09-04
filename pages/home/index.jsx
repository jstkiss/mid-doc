import Header from "../../src/components/header";
import Introduction from "../../src/components/introduction";
import React from "react";
import About from "../../src/components/abouts";
import Explore from "../../src/components/explore";
import Footer from "../../src/components/footer";

const HomePage = () => {
  return (
    <body>
      <div className="overflow-hidden bg-customblack">
        <Header />
        <Introduction />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">

          <div className="gradient-04 z-0"></div>
          <Footer />
        </div>
      </div>
    </body>
  );
};

export default HomePage;
