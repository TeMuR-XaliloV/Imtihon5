import React from 'react';
import call from "../../Images/call.svg";
import chat from "../../Images/chat.svg";
import empty from "../../Images/empty.svg";
import rightbarg from "../../Images/product-right-leaf.svg";
import css from '../Like/Like.css';

export default function Like() {
  return (
    <div className='Like'>

<div className="unshow">
           <img src={empty} alt="empty" id='empty' />
      </div>

      <img src={rightbarg} id='right-leaf-shop' />

      <p className='product-nav'>Bosh sahifa &nbsp; /<strong>Saqlangan dorilar</strong></p>
      <h2 className='shop-title'>Sevimli dorilar</h2>
      <div id="contact">
          <a href="tel:+998906728204">
            <div id="call">
              <img src={call} id="phone" width={"60px"} />
            </div>
          </a>
          <a href="sms:+998906728204">
            <div id="sms">
              <img src={chat} id="chat" width={"70px"} />
            </div>
          </a>
        </div>
    </div>
  )
}
