import React from "react";

const leftcontent1 = () => {
  return (
    <div className="h-full w-1/4 p-[20px]">
      <div className="top-leftcontent1 h-1/2 w-full">
        <h1 className="text-4xl font-semibold">
          Prospective <br />
          <span className="bg-gray-200 rounded-[30px] align-middle px-[5px]">
            customer
          </span>{" "}
          <br />
          segmentation
        </h1>
        <p className="mt-[30px]">
          Depending on customer satisfaction and access to banking products,
          potential target audience can be divided into three groups
        </p>
      </div>
      <div className="bottom-leftcontent1 h-1/2 w-full flex items-end">
        <i className="ri-arrow-right-up-line text-5xl"></i>
      </div>
    </div>
  );
};

export default leftcontent1;
