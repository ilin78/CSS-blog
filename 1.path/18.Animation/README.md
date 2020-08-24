## Анимация

#### Transition

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

- ```transition-timing-function``` - задает стиль перехода, некий сценарий по которому может осуществляться анимация.

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