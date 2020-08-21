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

- ```transition-timing-function```