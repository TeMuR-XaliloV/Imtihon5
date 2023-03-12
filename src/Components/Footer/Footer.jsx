import React from 'react';
import css from '../Footer/Footer.css';
import logo from "../../Images/logofooter.svg";
import telegram from "../../Images/telegram.svg";
import youtube from "../../Images/youtube.svg";
import instagram from "../../Images/face.svg";
import facebook from "../../Images/facebook.svg";
import googleplay from "../../Images/google-play.svg";
import appstore from "../../Images/app-store.svg";
import uycha from "../../Images/uycha.svg";

export default function Footer() {
  return (
    <div>
         <footer>
        <div className="footer-card">
          <img src={logo} alt="logo" className="footer-logo" />
          <p className="footer-text">
            Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar
          </p>
          <p className="footer-text-2">
            Ish vaqti: Har kuni 8:00 dan 18:00 gacha
          </p>
          <div className="social">
            <a href="https://instagram.com/seryoznay/" target={"_blank"}>
              <img src={instagram}className='social-icon' />
            </a>
            <a href="https://facebook.com" target={"_blank"}>
              <img src={facebook} className='social-icon'/>
            </a>
            <a href="https://youtube.com/@KingOfEmulator/" target={"_blank"}>
              <img src={telegram} className='social-icon'/>
            </a>
            <a href="https://t.me/internet_owner/" target={"_blank"}>
              <img src={youtube} className='social-icon' />
            </a>
          </div>
          <div className="green-card">
            <div className="abs">
              <p>E-mail</p>
              <h3>info@mehrigiyo.uz</h3>
            </div>
            <div className="abd">
              <p>Bizga qo'ng'iroq qiling</p>
              <h3>+99898 125 31 03</h3>
            </div>
          </div>
        </div>
        <div className="footer-card-2">
          <p>Huquqiy</p>
        </div>
        <div className="footer-card-3">
          <p>Ilovani yuklab olish</p>
          <div>
            <a href="#"><img src={googleplay} className="google-play play-store" /></a>
            <a href="#"><img src={appstore}  className='app-store play-store'/></a>
          </div>
        </div>
        <img src={uycha} id="footer-uycha" />
      </footer>
      <div className="footer-bottom">
        <p>
          © 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. Saytdan olingan
          barcha maʼlumotlar chop etilganda veb-saytga havola qilish majburiy.
        </p>
        <div id="footer-nav">
          <a href="#" id='footer-item'>Bosh sahifa</a>
          <a href="#" id='footer-item'>Biz haqimizda</a>
          <a href="#" id='footer-item'>Yangiliklar</a>
        </div>
      </div>
    </div>
  )
}
