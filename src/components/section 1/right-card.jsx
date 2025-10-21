import React from "react";

const rightCard = (props) => {
  console.log(props)
  return (
    <div className="rightCard h-full w-1/3 relative rounded-[30px] overflow-hidden">
      <img
        className="w-full h-full object-fill"
        src={props.img}
        alt=""
      />
      <div className="img-overlay w-full h-full absolute left-[0] top-[0]">
        <h1 className="w-[40px] h-[40px] bg-white text-black mt-[30px] ml-[30px] flex items-center justify-center text-2xl rounded-full">
          1
        </h1>
        <p className="cardPara text-[18px] ml-[50px] mt-[200px] text-white w-fit rounded-[10px] px-[10px] py-[15px]">
          {props.text}
        </p>
        <button className="text-white rounded-full bg-blue-500 px-[20px] py-[5px] text-xl ml-[50px]">
          {props.tag}
        </button>
        <button className="text-white bg-blue-500 flex items-center justify-center text-2xl rounded-full w-[40px] h-[40px] ml-[200px] mt-[-38px]">
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default rightCard;
