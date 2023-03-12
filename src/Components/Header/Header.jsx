import React from "react";
import Css from "../Header/Header.css";
import region from "../../Images/region.svg";
import location from "../../Images/location.svg";
import login from "../../Images/login.svg";
import logo from "../../Images/logo.svg";
import like from "../../Images/like.svg";
import shopping from "../../Images/shopping.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  return (
    <div className="Header">
      <div className="top">
        <div className="top-nav">
          <a href="#" className="item">
            Mahsulotlar katalogi
          </a>
          <a href="#" className="item">
            Foto-lavhalar
          </a>
          <a href="#" className="item">
            Yetkazib berish va to'lash
          </a>
          <a href="#" className="item orange">
            Aksiya
          </a>
          <a href="#" className="item green">
            Yangi
          </a>
        </div>
        <div className="top-login">
          <div className="region">
            <img src={region} alt="" id="region" />
          </div>
          <hr />
          <div className="location">
            <p>Toshkent shahar</p>
            <img src={location} alt="" id="location" />
          </div>
          <hr />
          <a href="/Login" className="link-login">
            <div className="login">
              <p>Kirish</p>
              <img src={login} alt="" id="login" />
            </div>
          </a>
        </div>
      </div>
      <nav>
        <NavLink to={"/"}>
          <img src={logo} alt="logo" id="logo" />
        </NavLink>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={"/"} className='nav-black'>Bosh sahifa</NavLink>
          </li>
          <NavLink to={"/Product"} className='nav-black'>Mahsulotlar</NavLink>
        </ul>
        <div className="menu">
          <NavLink className="like-menu" to={"/Like"}>
            <img src={like} alt="like" className="like-img"/>
          </NavLink>
          <NavLink className="shop-menu" to={"/Shop"}>
            <img src={shopping} alt="shop"/>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
