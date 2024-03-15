import React from 'react'
import chat from "../../../../assets/chat.svg"
import share from "../../../../assets/share.svg"
import heart from "../../../../assets/heart.svg"

function DescriPublic() {
  return (
   <>
   <section className="w-full h-auto p-2 rounded-lg border my-4">
      <div className="grid gap-4">
        <div key="" className="flex flex-col gap-2 bg-[#D9D9D9]">
          <article className="flex gap-2 items-center p-3 rounded-sm">
            <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
              <img
                className="w-ful h-full object-cover"
                src="https://s3-alpha-sig.figma.com/img/ce45/a896/d958cf406bb83c3c0a93e2f03fcb0bef?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFYzBEgulzUtWo~1ks3uv-cAe1N6OU7yuKykoM9zQIswGUY~WNjBb2N0-eim8kvSH~he7R2jCl~ZiL-3ASMBz9Y-pW4meYm1ASQbnmLc4T5ZUcdIkXqmK9sBkTe-vYrhYOXsN00j1HJuM2SgoYBhBYOtWAt5Mt-8RUPTzlrUyVo4bzmXApGOI6-5pveUvaqnDq9OC7XwebvKLKmP6A3jeBks4G50gSN51j3U~RZSt8YjMwq2IyA0mzY-xqAUZruUvNU5FuQm8ms2dXOKS~eIy3otB5ETCXoEzKCBO49yMDhgH4IvyUIghg4Di6O1nhc7D4j951QWXwDVX8Ay-D4g-A__"
                alt="perfil"
              />
            </div>
            <div>
              <h1 className="text-xs font-bold">Lizzy Mon</h1>
              <p className="text-xs text-gray-600">4 horas</p>
            </div>
          </article>

          <div className="p-3">
            <p className=' bg-white p-3 font-bold'>
                COMUNICADO IMPORTANTE
            </p>
          </div>
          <div className=" p-2">
            <p className='px-4'>
            Figma ipsum component variant main layer. Prototype thumbnail opacity outline select image list invite selection scale. Bold clip follower overflow align inspect. Star star asset team arrow pixel pixel vector team. Pen object background overflow draft text. Clip draft hand flatten selection connection flows. Editor undo italic blur union arrow union strikethrough editor. Image clip thumbnail flatten select pencil plugin overflow. Overflow italic star distribute object.
            </p>
          </div>

          <div className="p-3">
            <ul className="flex gap-3">
              <li>
                <a href="" className="flex gap-2 items-center">
                  <img src={heart} alt="" />
                  10 comentario
                </a>
              </li>
              <li>
                <a href="" className="flex gap-2 items-center">
                  <img src={chat} alt="" />
                  10 comentario
                </a>
              </li>
              <li>
                <a href="" className="flex gap-2 items-center">
                  <img src={share} alt="" />
                  10 comentario
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 p-3 flex flex-row items-center justify-between bg-[#C8C8C8]">
            <div>
              <a className="flex gap-2 items-center"><img src={heart} alt="img" />Me gusta</a>
            </div>

            <div className="flex flex-row gap-3">
              <a className="flex gap-2 items-center"><img src={chat} alt="img" />0 Comentarios</a>
              <a className="flex gap-2 items-center"><img src={share} alt="img" />Compartir</a>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default DescriPublic