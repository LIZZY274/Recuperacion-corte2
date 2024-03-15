import React from "react";

function DatosPersona() {
  return (
    <>
      <div className="mt-24 grid grid-cols-2 p-4 bg-[#F3F3F3]">
        <div className="flex flex-col gap-3">
          <h1 className="text   -4xl font-bold">Joanna Rosita</h1>
          <h3 className=" text-base text-gray-700">Ing. Software</h3>
          <p>Suchiapa, México.</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Intereses</p>
          <div className="flex flex-wrap gap-2">
            <p className="bg-[#EEEE] p-2 rounded flex items-center justify-center">
              Materias
            </p>
            <p className="bg-[#EEEE] p-2 rounded flex items-center justify-center">
              deportes
            </p>
            <p className="bg-[#EEEE] p-2 rounded flex items-center justify-center">
              Hobbies
            </p>
            <p className="bg-[#EEEE] p-2 rounded flex items-center justify-center">
              Comida/Series
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DatosPersona;
