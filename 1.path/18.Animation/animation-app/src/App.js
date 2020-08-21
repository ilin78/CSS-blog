import React, { Component } from "react";
import "./App.scss";

var myBlog = require("./img/myBlog.jpg");
var What = require("./img/what.jpg");
var Blog = require("./img/blog.jpg");

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <div className="button__row">
            <button className="button_duration"> Duration </button>

            <button className="button_property"> Property </button>

            <button className="button_delay"> Delay </button>
          </div>

          <div className="ease">Test</div>
        </div>
      </div>
    );
  }
}
