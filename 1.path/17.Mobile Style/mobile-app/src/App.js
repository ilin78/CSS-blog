import React, { Component } from "react";
import "./App.scss";

var myBlog = require("./img/myBlog.jpg");
var What = require("./img/what.jpg");
var Blog = require("./img/blog.jpg");

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content-full">
          <div className="container ">
            <div className="header__row">
              <div className="header__logo">Production</div>
              <div className="header__menu menu"></div>
              <nav className="menu__body">
                <ul className="menu__list">
                  <li><a href="#" className="menu__link">Turn on</a></li>
                   <li><a href="#" className="menu__link">News</a></li>
                  <li><a href="#" className="menu__link">Support</a></li>
                  <li><a href="#" className="menu__link">About</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="block">
            <div className="container">
              <div className="block__body">
                <div className="block__row">
                  <div className="block__column">
                    <div className="block__item">
                      <div className="block__title title">Our production</div>
                      <div className="block__text">In a basis of manufacture of our production - the best engineering decisions and the high technologies which allow to achieve the perfect result.</div>
                      <div className="block__btn">See more</div>
                    </div>
                  </div>
                  <div className="block__column">
                    <div className="block__item">
                      <div className="block__title title"> Technology</div>
                      <div className="block__text">Technology has evolved and shaped our workplaces in many ways, through the adoption of tools like the internet and email for communications, word processing, spreadsheets and presentations for office productivity, electronic databases for record keeping, and robots and artificial intelligence for automation</div>
                      <div className="block__btn">Start now</div>
                    </div>
                  </div>
                  <div className="block__column">
                    <div className="block__item">
                      <div className="block__title title">Support</div>
                      <div className="block__text">If you still have questions call us or fill in a short questionnaire on website development.</div>
                      <div className="block__btn">Send</div>
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
