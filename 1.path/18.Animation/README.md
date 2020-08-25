## Анимация

# ЧАСТЬ 1

![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/18.Animation/image/animation.gif)
### Transition

- ```transition-duration: 0s;``` - определяет интервал, в течении которого будет происходить переход. Например 500ms.
```css
.button_duration {
  color: #fff;
  background-color: #dad;
  box-shadow: 0px 5px 0px #daa;
  transition-duration: 500ms;
}

.button_duration:hover {
  top: 2px;
  box-shadow: 0px 3px 0px #ada;
  background-color: #aad;
}
```

- ```transition-property: all;``` - позволяет задать отдельную анимацию для каждого элемента. Пример вместо all, можно задать ``` background-color```.
```css
.button_property {
  color: #fff;
  background-color: #dad;
  box-shadow: 0px 5px 0px #daa;
  transition-duration: 3500ms, 150ms;
  transition-property:  background-color, top;
}

.button_property:hover {
  top: 2px;
  box-shadow: 0px 3px 0px #ada;
  background-color: #aad;
}
```
- ``` transition-delay: 0s, 0.2s, 0.2s;``` - задержка выполнения перехода для ```transition-property:  background-color, top, box-shadow;``` соответственно.
```css
.button_delay {
  color: #fff;
  background-color: #dad;
  box-shadow: 0px 5px 0px #daa;
  transition-duration: 3500ms, 150ms;
  transition-property:  background-color, top, box-shadow;
  transition-delay: 0s, 0.2s, 0.2s;
}

.button_delay:hover {
  top: 2px;
  box-shadow: 0px 3px 0px #ada;
  background-color: #aad;
}
```
### transition-timing-function

```transition-timing-function``` - задает стиль перехода, некий сценарий по которому может осуществляться анимация.

```ease```
```ease-in```
```ease-out```
```ease-in-out```
```linear```
```steps(in,start | end)```
```cubic-beizer(x1,y1,x2,y2)```

```scss
.ease {
  button {
    transition-duration: 1s;
    display: flex;
    flex-direction: column;
    width: 200px;
    font-size: 15px;
    margin: 20px 5px;
    &:hover{
      width: 100%;
    }
  }

    .button-transition {
    &_1 {
      background-color: #ada;
      transition-timing-function: ease;
    }
    &_2 {
      background-color: #aed;
      transition-timing-function:ease-in;
    }
    &_3 {
      background-color: #add;
      transition-timing-function:ease-out;
    }
    &_4 {
      background-color: #aad;
      transition-timing-function:ease-in-out;
    }
    &_5 {
      background-color: #dad;
      transition-timing-function:linear;
    }
    &_6 {
      background-color: #daa;
      transition-timing-function:cubic-beizer(3, end);
    }
    &_7 {
      background-color: #dda;
      transition-timing-function:cubic-bezier(0.68, -0.55, 0.265, 1.55); //x1,y1,x2,y2
    }
  }
}
```


### @keyframes 

```scss
@keyframes circle-1 {
  from {

  }
  to {
    
  }
}
```

#### ANIMATION_NAME 
Привязка к элементу
```scss
 .super__circle {
   animation-name: circle-1, circle-2;
 }

@keyframes circle-1 {} // Ключевой кадр 1
@keyframes circle-2 {} // Ключевой кадр 2
```
#### ANIMATION_DURATION

Отвечает за продолжительность анимации, т е время за которое проигрываются ключевые кадры.
```  animation-duration: 1s, 500ms;``` время для каждого из названия элемента.
```scss
 .super__circle {
   animation-name: circle-1, circle-2;
   animation-duration: 1s, 500ms;
 }

@keyframes circle-1 {} // Ключевой кадр 1
@keyframes circle-2 {} // Ключевой кадр 2
```
#### ANIMATION_TIMING_FUNCTION
```scss
animation-timing-function: ease,  circle-1, circle-2; //  по умолчанию ease 
```

#### ANIMATION_ITERATION_COUNT
Движение бесконечно или несколько раз.
```scss
animation-iteration-count: 1;  // 1 раз, можно указать infinite
```
#### ANIMATION_DIRECTION
```alternate``` - движение в обратную сторону
```alternate-reverse``` - каждый не четный проход будет проигрываться задом наперед
```css
animation-direction: alternate;
```
#### ANIMATION_PLAY_STATE
Запускать анимацию по определенному событию

```css
  .super__circle:hover {
    animation-play-state: paused;
  }
```
#### ANIMATION_DELAY
Ожидать 2 секунды.
```css
animation-delay: 2s;
```
Или начать с середины.
```css
animation-delay: -1s;
```
#### ANIMATION_FILL_MODE
Обозначает какие свойства будут применены после выполнения анимации.

```css
animation-fill-mode: forwards;   
```

#### Группировка кода

На примере
```scss
 animation-name: circle;
animation-duration: 5s;
animation-timing-function:ease-out,  circle;  // по умолчанию ease
animation-iteration-count: 1;                 // 1 раз, можно указать infinite
animation-fill-mode: forwards;                // оставить анимацию на месте по окончании
animation-direction: alternate;               // движение в обратную сторону
animation-delay: 1s;                          // Ожидание 1 сек
```

Начало со слова ```animation```

```scss
   animation: circle 5s ease-out 1 forwards alternate 1s , <здесь можно указать еще один ключевой кадр>;
```

## Пример

```css

.animation {
  
  .super__circle {
    
    width: 100px;
    height: 100px;
    background-color: #aad;
    border-radius: 50%;
    position: relative;
    left: 0;
    margin: 20px 0;
    animation: circle 5s ease-out 1 forwards alternate 1s;
  }
  .super__circle:hover {
    
    animation-play-state: paused;
  }

  @keyframes circle {
    0% {
      left: 0;
      background-color: #aad;
    }
    50% {      
      background-color: #fff;
      border-radius: 20px;
    }
    100% {
      left:  620px;
      background-color: #dad;
    }
  }
}
```

# ЧАСТЬ 2

## CSS Transform




- ```div``` является блочным
```html
<div class="block"><div>  
```
```css
.block {transform: ;}
```

- ```span``` не является блочным, поэтому требется изменит display: inline-block; 

```html
<span class="inline"><span>  
```
```css
.inline {
  display: inline-block;
  transform: ;
}
```

![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/18.Animation/image/multi.gif)

```scss
.view-block{
  text-transform: uppercase;
  color: #fff;
  line-height: 100px;
  width: 100px;
  text-align: center;
  box-shadow:0 0 1px #aaa;
  transition: all 2.8s ease 0s;
}

.block__translate {
 
  transform: translate(-50%, 0px); // сдвиг относительно центра + left 50%
  position: relative;
  left: 50%;
  background-color: #930;
  &:hover {
    transform: translate(-80%, 10px);
  }
}

.block__scale {
  background-color: #618;
  transform: scale(1);
  &:hover {
    transform: scale(1.5); // увеличить в 1.5 раз (x y или просто x)
  }
  &:active {
    transform: scale(-1, 1); // при нажатии отобразить зеркально по x
  }
}

.block__rotate {
  position: relative;
  left: 70%;
  background-color: #60f;
  transform: rotate(0);
  &:hover {
    transform: rotate(360deg);
  }
}

.block__skew {
  position: relative;
  left: 30%;
  background-color: #80f;
  transform: skew(5deg, 5deg);
  &:hover {
    transform: skew(-5deg, -5deg)
  }
}

.block__matrix {
  line-height: 24px;
  position: relative;
  left: 0%;
  background-color: #7a4;
  transform: matrix(
    1,  /*Масштабирование X SCALE */
    0,  /*Деформация Y SKEW*/
    0,  /*Деформация X SKEW*/
    1,  /*Масштабирование Y SCALE */
    0,  /*Смещение X TRANSLATE*/
    0   /*Смещение Y TRANSLATE*/
  );

  &:hover {
    transform: matrix(1.2, 0.8, 0.8, 1.2, 10, 10);
  }
}

.block__multi {
  position: relative;
  left: 60%;
  line-height: 24px;
  background-color: #80f;

  &:hover {
    transform: translate(50px, 50px) scale(0.5) rotate(360deg);
  }
}

```