import React, { Component } from 'react'
import './App.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <div class="wraper">
          <div class="block">
            <div class="block__row">
              <div class="block__column block__column_1">
                <div class="block__item">1</div>
              </div>
              <div class="block__column block__column_2">
                <div class="block__item">2 
                Вытянутый блок
                </div>
              </div>
              <div class="block__column block__column_3">
                <div class="block__item">3</div>
              </div>
            </div>
            <ul class="block__list">
              <li>
                <div class="block__info block__info_y">FLEX-контейнер</div>
              </li>
              <li>
                <div class="block__info block__info_p">FLEX-элемент</div>
              </li>
              <li>
                <div class="block__info block__info_g">Содержимое FLEX-элемента (контент)</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
