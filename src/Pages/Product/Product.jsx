import React from 'react';
import Css from '../Product/Product.css';
import leftbarg from '../../Images/barg-left.svg';
import morebtn from '../../Images/morebtn.svg';
import clear from '../../Images/clear.svg';
import call from "../../Images/call.svg";
import chat from "../../Images/chat.svg";
import rohat from "../../Images/rohat.svg";
import detoksioma from "../../Images/detoksioma.svg";
import mehrigiyo from "../../Images/mehrigiyo.svg";
import formen from "../../Images/formen.svg";
import activelike from "../../Images/like-btn-active.svg";
import savecard from "../../Images/savecard.svg";
import tavsilotlar from "../../Images/tavsilotlar.svg";
import rightbarg from "../../Images/product-right-leaf.svg";
import like from "../../Images/like-btn.svg";
import Modal from "react-modal";
import retestar from '../../Images/retestar.svg'
import leafmodal from "../../Images/product-right-leaf.svg";
import { useState } from 'react';

export default function Product() {
  const [count, setCount] = useState(0);
  const [modalIsOpen, serModalIsopen] = useState(false)
  const Minus = ()=>{
    if(count!==0){
      setCount(count-1)}}
  return (
    <div className='Product'>
      <Modal className="show-modal" isOpen={modalIsOpen}>
        <button className="close-modal" onClick={() => serModalIsopen(false)}>X</button>
        <img src={leftbarg} alt="leaf" className="modal-leaf" />
        <img src={leafmodal} alt="leaf" className="modal-right-leaf" />
        <div className="modal-cards">
          <img src={mehrigiyo} className="modal-card" width={81.33} />
          <img src={mehrigiyo} className="modal-card" width={81.33} />
        </div>
        <div className="modal-shop">
          <img src={mehrigiyo} className="modal-mehrigiyo" width={271} />

          <div className="modal-main">
            <h3 className="modal-main-title">Rastaropsha MAX</h3>
            <p className="modal-rate">
              <img src={retestar} />
              <img src={retestar} />
              <img src={retestar} />
              <img src={retestar} />
              <img src={retestar} />4.7
            </p>
            <div className="add-pr">
              <div className="state">
                <button className="add-state" onClick={Minus}>-</button>
                <h3 className="state-number" >{count}</h3>
                <button className="remove-state" onClick={() => setCount(count + 1)}>+</button>
              </div>
              <h2 className="modal-price">{count === 0 ? 16000 : 16000 * count} uzs</h2>
            </div>
            <hr className="modal-line" />
            <div className="modal-info">
              <h4>Mahsulot haqida</h4>
              <p>Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi</p>
            </div>
            <hr className="modal-line" />
            <div className="weight"><h4>Og’irligi</h4> <h4 className="gr">100 gr</h4></div>
          </div>
        </div>
      </Modal>
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
      <p className='product-nav'>Bosh sahifa &nbsp;/<strong>Mahsulotlar</strong> </p>
      <div className="search-menu">
      <h2>Mahsulotlar</h2>
          <input type="search" placeholder='Qidirish' id='search' />
      </div>
      <img src={leftbarg} alt="barg" className='pc-barg-left'/>
      <div id='productss' className='products'>
      <div className='category'>
        <div className='category-title'>
        <h4>Kategoriyalar</h4>
        <p><img src={clear} /> Tozalash</p>
        </div>
        <div>
          <input type="checkbox" checked/>Hammasi
        </div>
        <div>
          <input type="checkbox" />Choy
        </div>
        <div>
          <input type="checkbox" />Asal
        </div>
        <div>
          <input type="checkbox" />Yog'
        </div>
        <div>
          <input type="checkbox" />Non
        </div>
        <div>
          <input type="checkbox" />Ziravorlar
        </div>
        <div>
          <input type="checkbox" />Sharbatlar
        </div>
        <div>
          <input type="checkbox" />Lolipoplar
        </div>
        <div>
          <input type="checkbox" />Tabletkalar
        </div>
          <p><img src={morebtn} alt="" /> Ko’proq</p>
      </div>
      <div className="all-product">
      <div className="card card-p">
            <div className="card-top">
              <img src={detoksioma} />
              <img src={like} id="like-btn" />
            </div>
            <h4 className="card-title">ROHAT Yog`i №2</h4>
            <p className="mavjud">Mavjud</p>
            <div className="prices">
              <div>
                <p className="old-price">17,190, uzs</p>
                <h3 className="price">16 000 uzs</h3>
              </div>
              <img src={savecard} id="save" />
            </div>
            <p className="tavsilotlar" onClick={() => serModalIsopen(true)}>
                Tafsilotlar <img src={tavsilotlar} />
              </p>
          </div>
      <div className="card card-p">
            <div className="card-top">
              <img src={detoksioma} />
              <img src={like} id="like-btn" />
            </div>
            <h4 className="card-title">ROHAT Yog`i №2</h4>
            <p className="mavjud">Mavjud</p>
            <div className="prices">
              <div>
                <p className="old-price">17,190, uzs</p>
                <h3 className="price">16 000 uzs</h3>
              </div>
              <img src={savecard} id="save" />
            </div>
            <p className="tavsilotlar" onClick={() => serModalIsopen(true)}>
                Tafsilotlar <img src={tavsilotlar} />
              </p>
          </div>
          <div className="card card-p">
            <div className="card-top">
              <img src={formen} />
              <img src={like} id="like-btn" />
            </div>
            <h4 className="card-title">ROHAT Yog`i №2</h4>
            <p className="mavjud">Mavjud</p>
            <div className="prices">
              <div>
                <p className="old-price">17,190, uzs</p>
                <h3 className="price">16 000 uzs</h3>
              </div>
              <img src={savecard} id="save" />
            </div>
            <p className="tavsilotlar" onClick={() => serModalIsopen(true)}>
                Tafsilotlar <img src={tavsilotlar} />
              </p>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={mehrigiyo} />
              <img src={like} id="like-btn" />
            </div>
            <h4 className="card-title">Organic Bananas</h4>
            <p className="mavjud">7pcs, Price</p>
            <div className="prices">
              <div>
                <p className="old-price">17,190, uzs</p>
                <h3 className="price">16 000 uzs</h3>
              </div>
              <img src={savecard} id="save" />
            </div>
            <p className="tavsilotlar" onClick={() => serModalIsopen(true)}>
                Tafsilotlar <img src={tavsilotlar} />
              </p>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={mehrigiyo} />
              <img src={like} id="like-btn" />
            </div>
            <h4 className="card-title">Organic Bananas</h4>
            <p className="mavjud">7pcs, Price</p>
            <div className="prices">
              <div>
                <p className="old-price">17,190, uzs</p>
                <h3 className="price">16 000 uzs</h3>
              </div>
              <img src={savecard} id="save" />
            </div>
            <p className="tavsilotlar" onClick={() => serModalIsopen(true)}>
                Tafsilotlar <img src={tavsilotlar} />
              </p>
          </div>
          <div className="card">
            <div className="card-top">
              <img src={mehrigiyo} />
              <img src={like} id="like-btn" />
            </div>
            <h4 className="card-title">Organic Bananas</h4>
            <p className="mavjud">7pcs, Price</p>
            <div className="prices">
              <div>
                <p className="old-price">17,190, uzs</p>
                <h3 className="price">16 000 uzs</h3>
              </div>
              <img src={savecard} id="save" />
            </div>
            <p className="tavsilotlar" onClick={() => serModalIsopen(true)}>
                Tafsilotlar <img src={tavsilotlar} />
              </p>
          </div>
      </div>
      <img src={rightbarg} className='product-right-leaf' />
      </div>
    </div>
  )
}
