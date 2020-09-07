import React, { Component } from "react";
import "./App.scss";
var Logo = require("./img/logo.jpg");
var img_01 = require("./img/1.jpg");
var img_02 = require("./img/2.jpg");
var img_03 = require("./img/3.jpg");
var img_04 = require("./img/4.jpg");
var img_05 = require("./img/5.jpg");
var img_06 = require("./img/6.jpg");
var img_07 = require("./img/7.jpg");
var img_08 = require("./img/8.jpg");
var img_09 = require("./img/9.jpg");
var img_10 = require("./img/10.jpg");
var img_fls = require("./img/fls.jpg");

export default class App extends Component {
  render() {
    return (
      <div class="wrapper">
        {/* HEAD */}
        <header class="header">
          <div  class="header__logo" >
            <a href="#">
              {/* <img  src={Logo} alt="" ></img> */}
              </a>
          </div>
          <nav class="header__menu">
              <ul class="header__list">
                <li>
                  <a href="" class="header__link">Пункт меню</a>
                </li>
                <li>
                  <a href="" class="header__link">Пункт меню</a>
                </li>
                <li>
                  <a href="" class="header__link">Пункт меню</a>
                </li>
                <li>
                  <a href="" class="header__link">Пункт меню</a>
                </li>
              </ul>
              <div class="header__burger">
                <span> </span>
              </div>
          </nav>
        </header>
        {/* CONTENT */}
        <main class="main">
          <aside class="sidebar">
            <nav class="sidebar__menu">
              <ul class="sidebar__list">
                <li>
                  <a href="" class="sidebar__link">Пункт меню</a>
                </li>
                <li>
                  <a href="" class="sidebar__link">Пункт меню</a>
                </li>
                <li>
                  <a href="" class="sidebar__link">Пункт меню</a>
                </li>
                <li>
                  <a href="" class="sidebar__link">Пункт меню</a>
                </li>
              </ul>
            </nav>
          </aside>

          <section class="content"> 
            <h1 class="content__title">Grid-Layout - Практика</h1>
            <section class="content__gallary gallary">
              <h2 class="gallary__title">Галерея</h2>
              <div class="gallary__items">
                <div class="gallary__item gallary_item_big">
                  <img class="width" src={img_01} alt="" ></img>
                </div>
                <div class="gallary__item gallary_item_big">
                  <img class="width" src={img_02} alt="" ></img>
                </div>
                <div class="gallary__item gallary_item_big">
                  <img class="width" src={img_03} alt="" ></img>
                </div>
                <div class="gallary__item gallary_item_big">
                  <img class="width" src={img_04} alt="" ></img>
                </div>
                <div class="gallary__item gallary_item_big">
                  <img class="width" src={img_05} alt="" ></img>
                </div>
                <div class="gallary__item gallary_item_big">
                  <img class="width" src={img_06} alt="" ></img>
                </div>
                <div class="gallary__item gallary_item_big">
                  <img class="width" src={img_07} alt="" ></img>
                </div>
                <div class="gallary__item gallary_item_big">
                  <img class="width" src={img_08} alt="" ></img>
                </div>
                <div class="gallary__item gallary_item_big">
                  <img class="width" src={img_09} alt="" ></img>
                </div>
                <div class="gallary__item gallary_item_big">
                  <img class="width" src={img_10} alt="" ></img>
                </div>
              </div>
              </section>
              <div class="content__products products">
                <h2 class="products__title">Товары</h2>
                <div class="products__items">
                  <div class="products__item">
                    <a class="products__image">
                      <img  class="width" src={img_fls} alt="" ></img>
                    </a>
                    <a href="" class="products__name">Мы нацелены попасть в центр!</a>
                    <a href="" class="products__button">Присоединиться</a>
                  </div>
                </div>
                <div class="products__items">
                  <div class="products__item">
                    <a class="products__image">
                      <img  class="width" src={img_fls} alt="" ></img>
                    </a>
                    <a href="" class="products__name">Мы нацелены попасть в центр!</a>
                    <a href="" class="products__button">Присоединиться</a>
                  </div>
                </div>
                <div class="products__items">
                  <div class="products__item">
                    <a class="products__image">
                      <img  class="width" src={img_fls} alt="" ></img>
                    </a>
                    <a href="" class="products__name">Мы нацелены попасть в центр!</a>
                    <a href="" class="products__button">Присоединиться</a>
                  </div>
                </div>
              </div>
            </section>
        </main>
        {/* FOOTER */}
        <footer class="footer">
          <div class="footer__copy">
            Copy, 2020 
          </div>
          <div class="footer__text">
            Чтобы продолжить нажмите "Присоединиться"
          </div>
        </footer>
      </div>
    );
  }
}
