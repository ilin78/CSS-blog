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
          <div className="hi">
            <div className="container">
              <div className="hi__row">
                <div className="hi__body">
                  <div className="hi__title">
                    О том как создать свой первый блог
                  </div>
                  <ul className="hi__list">
                    <li>Это может каждый и это не сложно.</li>
                    <li>Это возможность поделиться информацией с другими.</li>
                    <li>Это возможность научиться создавать своими руками.</li>
                    <li>Это просто интересно!</li>
                  </ul>
                </div>
                <div className="hi__image">
                  <img className="hi__image_size" src={myBlog} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="what">
            <div className="container">
              <div className="what__row">
                <div className="what__image_size">
                  <img className="what__image_size" src={What} alt="" />
                </div>
                <div className="what__body">
                  <div className="what__title title">Что такое Блог?</div>
                  <div className="what__text">
                    <p>
                      Блог (англ. blog, от web log — интернет-журнал событий,
                      интернет-дневник, онлайн-дневник) — веб-сайт, основное
                      содержимое которого — регулярно добавляемые человеком
                      записи, содержащие текст, изображения или мультимедиа. Для
                      блогов характерна возможность публикации отзывов
                      (комментариев) посетителями; она делает блоги средой
                      сетевого общения, имеющей ряд преимуществ перед
                      электронной почтой, группами новостей и чатами.
                    </p>
                    <p>
                      Людей, ведущих блог, называют бло́герами. Совокупность всех
                      блогов Сети принято называть блогосферой.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="columns__title title">
              Типы блогов и блогеров(классификация блогов)
            </div>
            <div className="columns__row">
              <div className="columns__column">
                <div className="columns__item item">
                  <div className="item__row">
                    <div className="item__image">
                    <img src={Blog} alt="" />
                    </div>
                    <div className="item__body">
                      <div className="item__title">Личные блоги</div>
                      <div className="item__text">
                        Это самый распространенный тип. Примеров тому немало:
                        блоги на ЖЖ или блогспот, в Моем мире и других
                        бесплатных хостингах. Как правило личные блоги ведутся
                        именно в социальных сетях и это есть ни что иное, как
                        дневники их авторов. 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="footer__row">
              <div className="footer__text">
                Исходный код этого блога Вы можете увидеть здесь!
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
