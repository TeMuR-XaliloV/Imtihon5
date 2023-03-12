import React from "react";
import Css from "../Home/Home.css";
import HomeBg from "../../Images/homebg.svg";
import HomeImg from "../../Images/home.svg";
import consultant from "../../Images/consultant.svg";
import hours from "../../Images/hours.svg";
import call from "../../Images/call.svg";
import chat from "../../Images/chat.svg";
import dostavka from "../../Images/dostavka.svg";
import tulov from "../../Images/tulov.svg";
import chegirma from "../../Images/chegirma.svg";
import pods from "../../Images/pods.svg";
import rohat from "../../Images/rohat.svg";
import detoksioma from "../../Images/detoksioma.svg";
import mehrigiyo from "../../Images/mehrigiyo.svg";
import formen from "../../Images/formen.svg";
import activelike from "../../Images/like-btn-active.svg";
import like from "../../Images/like-btn.svg";
import savecard from "../../Images/savecard.svg";
import tavsilotlar from "../../Images/tavsilotlar.svg";
import leftbarg from "../../Images/barg-left.svg";
import rightbarg from "../../Images/barg-right.svg";
import more from "../../Images/more.svg";
import morewhite from "../../Images/morewhite.svg";
import uycha from "../../Images/uycha.svg";
import rightuycha from "../../Images/sec-img.svg";
import x from "../../Images/x.svg";
import plus from "../../Images/plus.svg";
import orderbg from "../../Images/order-bg.svg";
import opacha from "../../Images/opacha.svg";
import send from "../../Images/send.svg";
import grandpharm from "../../Images/grandpharm.svg";
import asklepiy from "../../Images/asklepiy.svg";
import doridarmon from "../../Images/doridarmon.svg";
import nikpharm from "../../Images/nikpharm.svg";
import laxisam from "../../Images/laxisam.svg";
import jayxun from "../../Images/jayxun.svg";
import logo from "../../Images/logofooter.svg";
import telegram from "../../Images/telegram.svg";
import youtube from "../../Images/youtube.svg";
import instagram from "../../Images/face.svg";
import facebook from "../../Images/facebook.svg";
import googleplay from "../../Images/google-play.svg";
import appstore from "../../Images/app-store.svg";
import successful from '../../Images/successful.svg'
import retestar from '../../Images/retestar.svg'
import leafmodal from "../../Images/product-right-leaf.svg";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Modal from "react-modal";

export default function Home() {
  const [count, setCount] = useState(0);
  const [modalIsOpen, serModalIsopen] = useState(false)
  const Minus = ()=>{
    if(count!==0){
      setCount(count-1)}}

  const showsuccsess = document.querySelector(".succsess")

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Murojatingiz Yuborildi');
  }
  // const likeBtn = document.querySelector("#like-btn")
  // likeBtn.addEventListener('click', (e) => {
  //   likeBtn.classList.toggle('like-active')
  // })
  return (
    <div className="Home">
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

      <img src={HomeBg} alt="" id="homebg" />
      <main>
        <h1 className="main-title">Bepul shifokor maslahat kerakmi?</h1>
        <p className="main-info">
          24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq <br />
          Faqat
          <a href="#" className="monile-app">
            {" "}
            mobil ilovada
          </a>
        </p>
        <img src={HomeImg} alt="" id="homeimg" />
        <div className="main-card">
          <div className="main-card-top">
            <img src={consultant} alt="consultant" />
            <h3 className="main-card-title">Consultant</h3>
          </div>
          <p className="main-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Ut ullamcorper in et amet.
          </p>
        </div>
        <div className="main-card-2">
          <div className="main-card-top">
            <img src={hours} alt="consultant" />
            <h3 className="main-card-title">24/7 xizmatlar</h3>
          </div>
          <p className="main-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Ut ullamcorper in et amet.
          </p>
        </div>
        <div className="succsess">
          <img src={successful} />
        </div>
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
      </main>
      <div className="usefull">
        <div className="usefull-ctn">
          <img src={dostavka} alt="" />
          <div className="usefull-ctn-texts">
            <h4>Yetkazib berish bepul</h4>
            <p>
              100 000 so'mdan ortiq <br />
              buyurtma berganingizda
            </p>
          </div>
        </div>
        <div className="usefull-ctn">
          <img src={tulov} alt="" />
          <div className="usefull-ctn-texts">
            <h4>Tez to'lov</h4>
            <p>100% xavfsiz to'lov</p>
          </div>
        </div>
        <div className="usefull-ctn">
          <img src={chegirma} alt="" />
          <div className="usefull-ctn-texts">
            <h4>Doimiy chegirmalar</h4>
            <p>Ular allaqachon ishlamoqda</p>
          </div>
        </div>
        <div className="usefull-ctn">
          <img src={pods} alt="" />
          <div className="usefull-ctn-texts">
            <h4>Onlayn yordam</h4>
            <p>Onlayn yordam</p>
          </div>
        </div>
      </div>
      <div id="products">
        <h2 className="products-title">Mahsulotlarimiz ro'yxati</h2>
        <div className="cards">
          <img src={leftbarg} id="barg-left" />
          <div className="card">
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
          <div className="card">
            <div className="card-top">
              <img src={rohat} />
              <img src={like} id="like-btn" />
            </div>
            <h4 className="card-title">Rohat Sirop</h4>
            <p className="mavjud">Erkaklar kuchi</p>
            <div className="prices">
              <div>
                <p className="old-price">200,190, uzs</p>
                <h3 className="price">150 000 uzs</h3>
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
            <h4 className="card-title">Rohat Sirop</h4>
            <p className="mavjud">Erkaklar kuchi</p>
            <div className="prices">
              <div>
                <p className="old-price">200,190, uzs</p>
                <h3 className="price">150 000 uzs</h3>
              </div>
              <img src={savecard} id="save" />
            </div>
            <p className="tavsilotlar" onClick={() => serModalIsopen(true)}>
              Tafsilotlar <img src={tavsilotlar} />
            </p>
          </div>

        </div>
        <div className="more">
          <NavLink to={'/Product'} className='more-product'><p>
            Barcha mahsulotlarni ko’rish <img src={more} className="more-img" />
          </p>
          </NavLink>
        </div>
      </div>
      <section>
        <div className="section">
          <div>
            <h2 className="sec-title">
              Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz
            </h2>
            <img src={uycha} className="uycha" />
          </div>
          <img src={rightuycha} className="right-uycha" />
        </div>

        <div className="questions">
          <div>
            <h2>Ko’p so'raladigan savollar</h2>
            <p className="ques-info">
              Qo'shimcha ma'lumot uchun <br />
              biz bilan bog'laning
            </p>
            <div className="more-2">
              <p>
                Batafsil
                <img src={more} className="more-img" />
              </p>
            </div>
          </div>
          <div className="infocha">
            <img src={rightbarg} className="right-barg" />

            <div className="infos infos-top">
              <div className="left-milchop">
                <h3>01</h3>
                <p>Какой состав сока Alatoo?</p>
              </div>
              <img src={x} width="16px" className="infos-img" />
            </div>

            <hr className="text-hr" />

            <div className="infos">
              <div className="left-milchop">
                <h3>02</h3>
                <p>Сколько стоит Алатоо и сколько стоит доставка?</p>
              </div>
              <img src={plus} width="16px" className="infos-img" />
            </div>

            <hr className="text-hr" />
            <div className="infos">
              <div className="left-milchop">
                <h3>03</h3>
                <p>Здравствуйте, аллергия часто на этот сок?</p>
              </div>
              <img src={plus} width="16px" className="infos-img" />
            </div>

            <hr className="text-hr" />

            <div className="infos">
              <div className="left-milchop">
                <h3>04</h3>
                <p>Здравствуйте, аллергия часто на этот сок?</p>
              </div>
              <img src={plus} width="16px" className="infos-img" />
            </div>

            <hr className="text-hr" />

            <div className="infos">
              <div className="left-milchop">
                <h3>05</h3>
                <p>Здравствуйте, аллергия часто на этот сок?</p>
              </div>
              <img src={plus} width="16px" className="infos-img" />
            </div>
          </div>
        </div>
        <div className="order">
          <img src={orderbg} className="orderbg" />
          <img src={opacha} className="opacha" />
          <form className="order-card">
            <p className="order-text">Biz bilan bog'lanish</p>
            <h3 className="order-title">So'rovingizni yuboring</h3>
            <TextField id="standard-basic" label="Ismingiz" variant="standard" className="name" type='name' />
            <TextField id="standard-basic" label="Email" variant="standard" className="email" type='email' />
            <TextField id="standard-basic" label="Telefon raqamingiz" variant="standard" type='tel' className='tel' />
            <TextField id="standard-basic" label="Murojatingizni Yozing" variant="standard" type='text' className='murojat' />
            <button type="submit" id="order-btn" onClick={handleSubmit}>
              Xabar yuborish
              <img src={send} className='send-img' />
            </button>
          </form>
        </div>
        <hr className="footer-line" />
        <div className="ads-card">
          <img src={grandpharm} />
          <img src={asklepiy} />
          <img src={doridarmon} />
          <img src={nikpharm} />
          <img src={laxisam} />
          <img src={jayxun} />
        </div>
        <hr className="footer-line2" />
      </section>
    </div >
  );
}
