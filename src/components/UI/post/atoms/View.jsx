import React from "react";
import Post from "./Post";
import heart from "../../../../assets/heart.svg"
import chat from "../../../../assets/chat.svg"
import com from "../../../../assets/share.svg"


function View({ views }) {
  return (
    <section className="w-full h-auto p-2 rounded-lg border my-4">
      <div className="grid gap-4">
        {views.map((view) => (
          <div key={view.id} className="flex flex-col gap-2 bg-[#D9D9D9]">
            <article className="flex gap-2 items-center p-3 rounded-sm">
              <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                <img
                  className="w-ful h-full object-cover"
                  src={view.images}
                  alt="perfil"
                />
              </div>
              <div>
                <h1 className="text-xs font-bold">{view.nombre}</h1>
                <p className="text-xs text-gray-600">{view.carrera}</p>
              </div>
            </article>

            <div className="p-3">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ipsam labore, beatae ab officiis incidunt quisquam blanditiis!
              </p>
            </div>
            <div className="w-[376px] h-[276px] p-2">
              <img className="w-full h-full object-center object-cover" src={view.images} alt="" />
            </div>

            <Post/>
            <div className="px-4 p-3 flex flex-row items-center justify-between bg-[#C8C8C8]">
              <div>
                <a className="flex gap-2 items-center"><img src={heart} alt="img" />Me gusta</a>
              </div>

              <div className="flex flex-row gap-3">
              <a className="flex gap-2 items-center"><img src={chat} alt="img" />0 Comentarios</a>
              <a className="flex gap-2 items-center"><img src={com} alt="img" />Compartir</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default View;
