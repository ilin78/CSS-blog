import React, { Component } from "react";
import "./App.scss";

var myBlog = require("./img/myBlog.jpg");
var What = require("./img/what.jpg");
var Blog = require("./img/blog.jpg");

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content">transition
          <div className="button__row">
            <button className="button_duration"> Duration </button>

            <button className="button_property"> Property </button>

            <button className="button_delay"> Delay </button>
          </div>

          <div className="ease">transition-timing-function
            <button class="button-transition_1">ease</button>
            <button class="button-transition_2">ease-in</button>
            <button class="button-transition_3">ease-out</button>
            <button class="button-transition_4">ease-in-out</button>
            <button class="button-transition_5">linear</button>
            <button class="button-transition_6">steps</button>
            <button class="button-transition_7">cubic-beizer</button>
          </div>

          <div className="animation">@keyframes
            <div className="super__circle"></div>
          </div>
        </div>
      </div>
    );
  }
}
