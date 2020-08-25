import React, { Component } from "react";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <div className="path">часть 3</div>




          <div className="path">часть 2</div>
          
          <div className="block__translate view-block">Translate</div>
          <div className="block__scale view-block">Scale</div>
          <div className="block__rotate view-block">Rotate</div>
          <div className="block__skew view-block">Skew</div>
          <div className="block__matrix view-block"><p>Matrix</p> SCALE, SKEW, TRANSLATE</div>
          <div className="block__multi view-block"><p>translate() scale() rotate()</p> </div>
          <div className="block__transform-origin view-block">transform origin</div>


          <div className="path">часть 1</div>
          transition
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
