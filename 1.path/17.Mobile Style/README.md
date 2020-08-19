### Адаптивная верстка


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