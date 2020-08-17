import React, { Component } from "react";
import "./App.scss";

var myBlog = require("./img/myBlog.jpg");
var What = require("./img/what.jpg");
var Blog = require("./img/blog.jpg");

export default class App extends Component {
  render() {
    return (
      <div className="wraper">
        <div className="content">
          <div className="container">
          <div className="header__row">
            <a href="#" className="header__logo"></a>
            <div className="header__menu menu">
              <span>Start</span>
            </div>
            <nav className="menu__body">
              <ul className="menu__list">
                <li><a href="#" className="menu__link">TEXT 1</a></li>
                <li><a href="#" className="menu__link">TEXT 2</a></li>
                <li><a href="#" className="menu__link">TEXT 3</a></li>
                <li><a href="#" className="menu__link">TEXT 4</a></li>
                <li><a href="#" className="menu__link">TEXT 5</a></li>
              </ul>
            </nav>
           </div>
          </div>
          <div className="block">
            <div className="container">
              <div className="block__row">
                <div className="block__title title"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <div className="block__item">
                    <div className="block__text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      {/* Eos nesciunt dolores possimus voluptatum repellendus quidem */}
                      {/* sint accusamus magnam iste quia neque, assumenda, obcaecati */}
                      {/* adipisci expedita nihil fuga velit quae est. */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
