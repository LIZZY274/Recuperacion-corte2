import React from 'react'
import heart from "../../../../assets/heart.svg"
import chat from "../../../../assets/chat.svg"
import com from "../../../../assets/share.svg"

function Post() {
  return (
    <>
        
        <div className="p-3">
              <ul className="flex gap-3">
                <li>
                  <a href=""className="flex gap-2 items-center">
                    <img src={heart} alt="" />
                    10 comentario
                  </a>
                </li>
                <li>
                  <a href=""className="flex gap-2 items-center">
                    <img src={chat} alt="" />
                    10 comentario
                  </a>
                </li>
                <li>
                  <a href=""className="flex gap-2 items-center">
                    <img src={com} alt="" />
                    10 comentario
                  </a>
                </li>
              </ul>
            </div>
    </>
  )
}

export default Post