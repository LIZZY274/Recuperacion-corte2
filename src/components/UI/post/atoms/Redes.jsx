import React from "react";
import insta from "../../../../assets/insta.svg"
import face from "../../../../assets/face.svg"
import tw from "../../../../assets/tw.svg"



function Redes() {
  return (
    <>
      <div className="bg-[#F3F3F3] p-3 py-6">
        <ul className="flex gap-2">
          <li className="">
            <a className="flex items-center gap-0" href="">
              <img src={insta} alt="logo" />
              @Joanna Rosita
            </a>
          </li>
          <li>
            {" "}
            <a className="flex items-center gap-1" href="">
              <img src={face} alt="logo" />
              /Joanna Rosita
            </a>
          </li>
          <li>
            {" "}
            <a className="flex items-center gap-1" href="">
              <img src={tw} alt="logo" />
              @Joanna
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Redes;
