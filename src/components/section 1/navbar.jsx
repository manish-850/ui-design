import React from 'react'

const navbar = () => {
  return (
    <div className="h-[30px] w-full flex items-center px-[20px] justify-between">
      <p className="text-white bg-black rounded-full py-[10px] px-[8px]">
        TARGET AUDIENCE
      </p>
      <button className="uppercase tracking-wider bg-gray-100 p-[5px] rounded-[10px]">
        <i className="ri-corner-down-right-line"></i> Digital BAnking plateform
      </button>
    </div>
  );
}

export default navbar
