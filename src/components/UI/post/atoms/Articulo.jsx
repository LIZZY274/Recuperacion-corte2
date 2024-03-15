import React from "react";
import Button from "../../Button";

function Articulo({ articulos }) {
  return (
    <>
      {articulos.map(articulo => (
        <article key={articulo.id} className="w-full h-[270px] bg-gray-600 relative border-2">
        <img
          className="w-full h-full object-cover object-center"
          src={articulo.images}
          alt=""
        />
        <div className=" absolute bottom-5 pl-4 flex flex-col gap-3">
          <h1 className="text-xl text-white font-bold ">{articulo.nombre}</h1>
          <p className="text-white text-xs">{articulo.descripcion}</p>
          <Button/>
        </div>
      </article>
      ))}
    </>
  );
}

export default Articulo;
