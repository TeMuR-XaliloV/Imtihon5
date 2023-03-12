import React from 'react';
import css from '../Shop/Shop.css';
import call from "../../Images/call.svg";
import chat from "../../Images/chat.svg";
import empty from "../../Images/empty.svg";
import rightbarg from "../../Images/product-right-leaf.svg";


export default function Shop() {
  return (
    <div className='Shop'>
      
      <div className="unshow">
           <img src={empty} alt="empty" id='empty' />
      </div>

      <img src={rightbarg} id='right-leaf-shop' />
      <p className='product-nav'>Bosh sahifa &nbsp;/ <strong>Savatcha</strong></p>
      <h2 className='shop-title'>Savatcha</h2>
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
