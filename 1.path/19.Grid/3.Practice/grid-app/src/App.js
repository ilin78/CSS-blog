import React, { Component } from "react";
import "./App.scss";
var Logo = require("./img/logo.jpg");

export default class App extends Component {
  render() {
    return (
      <div class="wrapper">
        {/* HEAD */}
        <header class="header">
          <div  class="header__logo" >
            <a href="#"><img  src={Logo} alt="" ></img></a>
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
                <div class="gallary__item">

                </div>
              </div>
            </section>
          </section>
        </main>
        {/* FOOTER */}
        <footer class="footer">

        </footer>
      </div>
    );
  }
}
