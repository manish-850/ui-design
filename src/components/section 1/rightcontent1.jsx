import React from "react";
import RightCard from "./right-card";
import data from "./cardData.js";

const rightcontent1 = () => {
  console.log(data)
  return (
    <div className="h-full w-3/4 flex gap-[20px]">
      {data.map((elem) => {
        return <RightCard img={elem.img} text={elem.text} tag={elem.tag} color={elem.color} />;
      })}
    </div>
  );
};

export default rightcontent1;
