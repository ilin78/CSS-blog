import React, { Component } from "react";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content">
        <h1>Grid-Layout - Определение сетки</h1>
        <div className="grid">
          <div className="grid__body">
            <div className="grid__item">1</div>
            <div className="grid__item">2</div>
            <div className="grid__item">3</div>
            <div className="grid__item">4</div>
            <div className="grid__item">5</div>
            <div className="grid__item">6</div>
          </div>
        </div>
        <h2>Имена областей</h2>
        <div className="grid-wrapper">
          <header className="grid-header">Шапка</header>
          <aside className="grid-side">Сайдбар</aside>
          <main className="grid-content">Контент</main>
        </div>
        <h2>Неявная сетка</h2>
        <div className="grid-auto">
            <div className="grid-auto__item">1</div>
            <div className="grid-auto__item">2</div>
            <div className="grid-auto__item">3</div>
            <div className="grid-auto__item">4</div>
            <div className="grid-auto__item">5</div>
            <div className="grid-auto__item">6</div>
            <div className="grid-auto__item">7</div>
            
        </div>
          <h6> 7 - неявно заданный элемент</h6>  
        </div>
      </div>
    );
  }
}
