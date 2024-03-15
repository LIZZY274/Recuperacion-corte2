import React from "react";
import Profile from "../UI/post/atoms/Profile";
import Acerca from "../UI/post/atoms/Acerca";
import DatosPersona from "../UI/post/atoms/DatosPersona";
import Redes from "../UI/post/atoms/Redes";
import HeroPerfil from "../UI/post/atoms/HeroPerfil";
import Articulo from "../UI/post/atoms/Articulo";
import View from "../UI/post/atoms/View";
import { view, articulos } from '../../data/data.json'

function HeroLayaout() {
  return (
    <>
      <main className="grid grid-cols-3 gap-3">
        <section className="relative mt-5 col-span-2 ">
          <HeroPerfil />
          <DatosPersona />
          <Redes />
          <section className=" grid grid-cols-3 gap-3 w-full h-auto mt-10 p-2">
            <Acerca />
            <div className="w-full bg-gray-200 p-3 ">
              <header className="flex items-center justify-between p-3">
                <h1 className="text-xl font-bold">Amigos</h1>
                <a className="text-xs border-b-2 border-stone-400 " href="">
                  Buscar amigos
                </a>
              </header>
              <div className="flex flex-col gap-2">
                <Profile />
                <Profile />
              </div>
            </div>
          </section>

          <section className=" p-2 rounded-xl flex gap-3 flex-col">
            <View views={view}/>
          </section>
        </section>
        <section className="w-full rounded-lg ">
         <div className=" bg-[#B9B9B9] p-3 mt-5 rounded-sm ">
         <h1 className="text-xl font-bold">Tus Articulos</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
            incidunt!
          </p>
          <div className=" space-y-6 border-transparent h-auto">
            <Articulo articulos={articulos} />
          </div>
         </div>
        </section>
      </main>
    </>
  );
}

export default HeroLayaout;
