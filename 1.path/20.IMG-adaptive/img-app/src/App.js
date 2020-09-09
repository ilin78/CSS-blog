import React, { Component } from "react";
import "./App.scss";
var img_400x600 = require("./img/400x600.jpg");
var img_800x400 = require("./img/800x400.jpg");
var img_1300x200 = require("./img/1300x200.jpg");
var img_1300x400 = require("./img/1300x400.jpg");
 

export default class App extends Component {
  render() {
    return (
       <div>
         <img src={img_400x600}></img>
         <img src={img_800x400}></img>
         <img src={img_1300x200}></img>
         <img src={img_1300x400}></img>
       </div>
    );
  }
}
