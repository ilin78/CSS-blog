import React, { Component } from "react";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <h1>Grid Layout - Элементы сетки</h1>
          <div className="grid"> 
            <div className="grid__body">
              <div className="grid__elem item_1">1</div>
              <span className="grid__elem item_2">2</span>
              <div className="grid__elem item_3">3</div>
              <div className="grid__elem item_4">4</div>
              <span className="grid__elem item_5">5</span>
              <div className="grid__elem item_6">6</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
