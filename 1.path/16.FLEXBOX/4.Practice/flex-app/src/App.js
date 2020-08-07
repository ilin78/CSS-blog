import React, { Component } from 'react'
import './App.scss'
 
var Diamond = require('./img/myBlog.jpg');

export default class App extends Component {
  render() {
    return (
      <div>

        <div className="wraper">
          <div className="content">
            <div className="hi">
              <div className="container">
                <div className="hi__row">
                  <div className="hi__body">
                    <div className="hi__title">О том как создать свой первый блог</div>
                    <ul className="hi__list">
                      <li>Это может каждый и это не сложно.</li>
                      <li>Это возможность поделиться информацией с другими.</li>
                      <li>Это возможность научиться создавать своими руками.</li>
                      <li>Это просто интересно!</li>
                    </ul>
                  </div>
                  <div className="hi__image">
                  <img src={Diamond}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="footer__row">
                <div className="footer__text">Исходный код этого блога Вы можете увидеть здесь!</div>
              </div>
            </div>
          </footer> 
        </div>
      </div>
    )
  }
}
