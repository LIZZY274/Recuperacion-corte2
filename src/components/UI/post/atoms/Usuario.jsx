import React from "react";
import fondo from "../../../../assets/fondoperfil.jpeg";
import perfil from "../../../../assets/perfil.jpeg";

function Usuario() {
  return (
    <>
      <article className=" bg-[#d9d9d9d9] overflow-hidden rounded-lg">
        <div className=" relative w-full">
          <div className=" w-full h-[85px] border-2">
            <img className="w-full h-full object-cover" src={fondo} alt="" />
          </div>
          <div className=" absolute -bottom-7 left-36 items-center overflow-hidden w-[60px] h-[60px] rounded-full">
            <img src={perfil} alt="" />
          </div>
        </div>

        <div className="flex  flex-col my-8 items-center gap-3 justify-center">
          <h1 className="text-lg font-bold">Lizzy Montejo Gonzalez</h1>
          <p className=" text-center text-sm px-10">
            Figma ipsum component variant main layer. Boolean frame scale
            horizontal vertical component team link.
          </p>

          <div className="flex flex-row gap-4">
            <div className="flex flex-col text-center items-center justify-center w-[px] h-[91px] p-4 bg-[#cccc]">
              <p>24</p>
              <p>Publicaciones</p>
            </div>
            <div className="flex flex-col text-center items-center justify-center w-[125px] h-[91px] p-4 bg-[#cccc]">
              <p>124</p>
              <p>Articulo</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Usuario;
