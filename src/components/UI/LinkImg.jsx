import React from "react";
import cofig from '../../assets/cofig.svg'

function LinkImg() {
  return (
    <>
      <a
        href="#"
        className="bg-[#C5C5C5] rounded-lg max-[100px]: p-2 text-black text-sm flex gap-2">
        <img src={cofig} alt="" />
      </a>
    </>
  );
}

export default LinkImg;
