import React, { Component } from 'react';
import './App.scss'

export default class App extends Component {
  render() {
    return(
      <div>
          <div class="about">
        <div class="about__body">
            <div class="about__header">
                <div class="about__title title">О нас</div>
                <div class="about__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consectetur ipsum quos, laudantium
                    ipsa vero numquam libero iste rem saepe?
                </div>
                <div class="about__row">
                    <div class="about__column">
                        <div class="item__about">
                            <div class="item-about__icon"></div>
                            <div class="item-about__title">Настройка</div>
                            <div class="item-about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                                saepe, repellat libero nobis sapiente iure voluptate consequuntur cum ut ab eum ex,
                                labore animi autem, eos explicabo quam quasi soluta.</div>
                        </div>
                    </div>
                    <div class="about__column">
                        <div class="item__about">
                            <div class="item-about__icon"></div>
                            <div class="item-about__title">Почта</div>
                            <div class="item-about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aliquid magnam doloribus unde ipsum odit alias sapiente. Totam quibusdam modi magni
                                sint, tenetur necessitatibus, minus est asperiores, labore deserunt molestias sed.</div>
                        </div>
                    </div>
                    <div class="about__column">
                        <div class="item__about">
                            <div class="item-about__icon"></div>
                            <div class="item-about__title">Уведомления</div>
                            <div class="item-about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Beatae repellendus dolores eligendi rem nesciunt, accusantium ab excepturi ex aliquam
                                debitis enim est necessitatibus quasi vel expedita sit, incidunt eos consequuntur!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}