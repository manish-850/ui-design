import React from "react";
import Navbar from "./navbar";
import Content1 from "./content1";

const section1 = (props) => {
  return (
    <div className="h-screen w-full py-[20px] px-[30px]">
      <Navbar />
      <Content1 />
    </div>
  );
};

export default section1;
