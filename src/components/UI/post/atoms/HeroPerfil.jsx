import React from "react";
import perfil from '../../../../assets/perfil.jpeg'
import fondo from '../../../../assets/fondoperfil.jpeg'

function HeroPerfil() {
  return (
    <>
      <div className=" w-full h-60 bg-[#F3F3F3]">
        <img
          className=" w-full h-full object-cover object-center"
          src={fondo}
          alt=""
        />
        <div className=" absolute top-[150px] left-10 w-[187px] h-[187px] rounded-full  overflow-hidden ">
          <img
            className="w-full h-full object-cover object-center"
            src={perfil}
            alt=""
          />
        </div>
        <div className="w-full h-[101px] bg-[#F3F3F3] absolute -z-10">
        </div>
      </div>
    </>
  );
}

export default HeroPerfil;
