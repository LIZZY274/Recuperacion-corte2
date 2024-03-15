import React from "react";
import Profile from "./Profile";

import chat from "../../../../assets/chat.svg"
import share from "../../../../assets/share.svg"
import heart from "../../../../assets/heart.svg"

function SeePublic() {
  return (
    <>
      <section className=" relative overflow-hidden w-full h-auto p-2 rounded-lg border">
        <div className="grid gap-4">
          <div key="" className="flex flex-col gap-2 bg-[#D9D9D9] pr-3">
            <article className="flex gap-2 items-center p-3 rounded-sm">
              <div>
                <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                  <img
                    className="w-ful h-full object-cover"
                    src="https://s3-alpha-sig.figma.com/img/ce45/a896/d958cf406bb83c3c0a93e2f03fcb0bef?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFYzBEgulzUtWo~1ks3uv-cAe1N6OU7yuKykoM9zQIswGUY~WNjBb2N0-eim8kvSH~he7R2jCl~ZiL-3ASMBz9Y-pW4meYm1ASQbnmLc4T5ZUcdIkXqmK9sBkTe-vYrhYOXsN00j1HJuM2SgoYBhBYOtWAt5Mt-8RUPTzlrUyVo4bzmXApGOI6-5pveUvaqnDq9OC7XwebvKLKmP6A3jeBks4G50gSN51j3U~RZSt8YjMwq2IyA0mzY-xqAUZruUvNU5FuQm8ms2dXOKS~eIy3otB5ETCXoEzKCBO49yMDhgH4IvyUIghg4Di6O1nhc7D4j951QWXwDVX8Ay-D4g-A__"
                    alt="perfil"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xs font-bold">Joanna Rosenbaum</h1>
                <p className="text-xs text-gray-600">4 horas</p>
              </div>
            </article>

            <div className="p-3">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                labore, beatae ab officiis incidunt quisquam blanditiis!
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-[244px] h-[196px] p-2">
                <img
                  className="w-full h-full object-center object-cover"
                  src="https://s3-alpha-sig.figma.com/img/7488/af77/64ac7409c4bd9e278f6d07e99baa96a1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEFXeeylpEb8vDGle1NgulJFEZJjEpvmEF6XpHiBSRgQ4jGQhR3fNzalJjTylxbeRybDSPlI2RGxHbvgHpzNNLyOyZIMJQS5j2mT~YjZb~fkq8JWDeYnMKSLuHJZ0e4qgQ9oCNTk8D8HvC~bbqXAL9ESV7jmU5a0lbfKaCKdXbIpMN3xlS6CmjhoCiH-vEW0yMD3aeV9rxFRUPF06fv~7rsZsfyPUpTYWFNlovZz65Y5WTFWZrVR8IPWz-oA456mABxRPvjBT9a~9S1Y1XSXwVZpFPklvS2ydUHZXbq~VR5UQ6UoLhMy-Ik2LOgNwWEznK9T7Rp0MT-t1~05jX~nUw__"
                  alt=""
                />
              </div>

              <div className="bg-white w-full h-[179px] p-3 flex flex-col pl-2">
                <div className="flex flex-row items-center">
                    <div className=" w-[50px] h-[58px] p-1 bg-[#eeee] flex flex-col items-center justify-center">
                        <h1 className=" text-base font-bold">24</h1>
                        <p className=" text-[10px]">Marzo</p>
                    </div>
                    <div className="flex flex-col items-start p-1 px-2">
                        <h1 className="text-[18px] font-bold ">Figma Ipusm Eevent</h1>
                        <p className="text-[12px]">14:00 hrs</p>
                    </div>
                </div>

                <div>
                <Profile />
              </div>

              <div>
                <a className="text-blue-500 underline text-[18px]" href="#">Aparta tu lugar</a>
                <p className="text-[12px]">16 participates</p>
              </div>
              </div>

              
            </div>

            <div className="p-3">
              <ul className="flex gap-3">
                <li>
                  <a href="" className="flex gap-2 items-center">
                    <img src="" alt="" />
                    10 comentario
                  </a>
                </li>
                <li>
                  <a href="" className="flex gap-2 items-center">
                    <img src="" alt="" />
                    10 comentario
                  </a>
                </li>
                <li>
                  <a href="" className="flex gap-2 items-center">
                    <img src="" alt="" />
                    10 comentario
                  </a>
                </li>
              </ul>
            </div>
           
          </div>

          <div className="px-4 bottom-0 p-3 absolute w-[97%]  flex flex-row items-center justify-between bg-[#C8C8C8]">
              <div>
                <a className="flex gap-2 items-center">
                  <img src={heart} alt="img" />
                  Me gusta
                </a>
              </div>

              <div className="flex flex-row gap-3">
                <a className="flex gap-2 items-center">
                  <img src={chat} alt="img" />0 Comentarios
                </a>
                <a className="flex gap-2 items-center">
                  <img src={share} alt="img" />
                  Compartir
                </a>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default SeePublic;
