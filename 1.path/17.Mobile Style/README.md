## Адаптивная верстка


#### Фиксированная верстка (не адаптивная).
HTML 
```html
<meta name="viewport" content="width=1170"/> 
```
CSS
задать ширину и выставить блок по центру
```css
.container {
  width: 1170px;
  margin: 0px auto;
} 
```
Верстка изменяемая под ширину экрана.

![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/17.Mobile%20Style/image/min-width.jpg)

#### Отзывчивая верстка (резиновая).
Настраивается ```viewport```
```html
<meta name="viewport" content="width=device-width"/> 
```
Необходимо везде убрать фиксированную ширину.

Указыается ширина в процентах, так как не зависимо от ширины экрана (от 4k до дисплея монитора 1080) страница должна отображаться корректно. Страница пропорционально сжимается.

#### Адаптивная верстка (с брейкпоинтами)

[Responsinator](http://www.responsinator.com/) - сервис, который позволяет посмотреть, как будет выглядеть сайт на популярных устройствах.
- iPhone eXpensive portrait · width: 375px
- iPhone eXpensive landscape · width: 734px
- Android (Pixel 2) portrait · width: 412px
- Android (Pixel 2) landscape · width: 684px
- iPhone 6-8 portrait · width: 375px
- iPhone 6-8 landscape · width: 667px
- iPhone 6-8 Plump portrait · width: 414px
- iPhone 6-8 Plump landscape · width: 736px
- iPad portrait · width: 768px
- iPad landscape · width: 1024px

![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/17.Mobile%20Style/image/media.jpg)

На маленьких ширинах контент не отображается, становится узким
Адаптивная сетка под разные типы устройств
```css
@media (max-width: 1170px){
  .container{
    max-width: 970px;
  }
}
@media (max-width: 992px){
  .container{
    max-width: 750px;
  }
}
@media (max-width: 767px){
  .container{
    max-width: none;
  }
}
```

Недостатком такой верстки является ширина, которая не в полной мере поглощается при изменении ширины.

![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/17.Mobile%20Style/image/adaptive-media.jpg)

#### Отзывчиво-адаптивная верстка (резиновая с брейкпоинтами)

```css

```

## Медиа запросы

Syntax
```
| @media | Тип устройства | { Применяемые стили } |
```

##### Пример.

```css
@media all { color: red; }
```
Типы устройств 
- ```all``` - все типы;
- ```print``` - для документов предварительного просмотра;
- ```screen``` - подходит для цветных мониторов пк;
- ```spreech``` - применяется для различных синтезатов речи;

Syntax
```
| @media | ( Характеристика устройства ) | { Применяемые стили }  |
```

- ```orintation: ``` - отвечает за положение устройства, портретное ```portrait``` или альбомное ```landskape```;
- ```resolution:``` - разрешение (количество точек на дюйм) можно указать максимальное количество точек ```max-resolution:300dpi```; 
- ```monochrome``` - для Ч\Б экранов;
- ```width``` и ```height``` - к ним также применяются ```min-``` и ```max-```;
  
##### Пример.
Стили применятся только в том случае если откроются на цветном пк ```and``` шириной viewport меньше 768px
- and
```css
@media screen and (max-width: 767px) {

}
```
- or
```css
@media screen or (max-width: 767px) {

}
```
- or = ,
```css
@media screen and (max-width: 992px), screen and (max-width: 700px)  {

}
```

Также можно указать в ```@import``` когда применять стили
```css
@import url(color.css) screen and (color); 
```

## Mobile First

Подразумевается, что в начале идет разработка под мобильную версию
при этом используется @media ```min-width```
```css
.block {

  &__body {
    max-width: 990px;
    margin: 0px auto;
  }
}

@media (min-width:412px){
  .block__body{
    margin: 10px auto;
    font-size: 15px;
  }
}

@media (min-width:767px){
  .block__body{
    font-size: 20px;
  }
}

@media (min-width:992px){  
  .block__body{
    font-size: 25px;
  }
}

```


#### meta для мобильных устройств

```html

<meta name="viweport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```

```initial-scale=1.0``` - начальный zoom, масштаб (сброс);
``` maximum-scale=1.0``` - запрет увеличивать масштаб;
```user-scalable=0``` - запрет для других устройств масштабировать верстку;

#### Menu-burger
Делать меню для маленьких устройств, если не помещается основное меню.

#### Спойлеры
Когда нужно убрать из поля видимости информацию, для того чтобы пользователь не прокачивал палец при прокрутке.

#### Отступы и шрифты
Необходимо изменять (уменьшать) шрифты и отступы на мобильных устройствах.

#### Увеличивать кнопки
Пальцы у мужчин большие, поэтому им может затруднительно выбирать мелкие элементы.

#### Делать адаптивные картинки

```css
.block__image img{
  max-width: 100%;
}
```

____________________________________________________________________

#### Группировака в коде

```css
.block__title {
  font-size: 50px;
  margin: 0 0 40px 0;
  @media (max-width: 992px) {
    font-size: 40px;
    margin: 0 0 30px 0;
  }
  @media (max-width: 767px) {
    font-size: 30px;
    margin: 0 0 15px 0;
  }
}
```
