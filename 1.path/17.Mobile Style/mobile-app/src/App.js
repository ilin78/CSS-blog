import React, { Component } from "react";
import "./App.scss";

var myBlog = require("./img/myBlog.jpg");
var What = require("./img/what.jpg");
var Blog = require("./img/blog.jpg");

export default class App extends Component {
  render() {
    return (
      <div class="wraper">
        <div class="container">
          <div class="header_row">
            <a href="#" class="header__logo"></a>
            <div class="header__menu menu">
              <span></span>
            </div>
            <nav class="menu__body">
              <ul class="menu__list">
                <li><a href="#" class="menu__link"></a></li>
                <li><a href="#" class="menu__link"></a></li>
                <li><a href="#" class="menu__link"></a></li>
                <li><a href="#" class="menu__link"></a></li>
                <li><a href="#" class="menu__link"></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
