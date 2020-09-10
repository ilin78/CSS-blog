## IMG

# Почему картинка не адаптивна?

### Особенности 

#### Возьмем 3 разных картинки с разными размерами

```scss
.cards {
    margin: 0px 30px;
    &__title {
    }
    &__row {
        margin: 0px -15px 70px -15px;
        display: flex;
    }
    &__column {
        flex: 0 1 33.333%;
        padding: 0px 15px;
    }
    &__item {}
    &__image {
        margin: 0px 0px 20px 0px;
        height: 200px;
        overflow: hidden;
    }
    &__image img {
        width: 100%;
        height: 100%;
    }
    &__body {
    }
}
```
```html
 <section class="cards">
            <h2 class="cards__title title">В карточках (три колонки)</h2>
            <div class="cards__row">
              <div class="cards__column">
                <div class="cards__item">
                  <div class="cards__image">
                    <img src={img_800x400}></img>
                  </div>
                  <div class="cards__body">Просто текст</div>
                </div>
              </div>
              <div class="cards__column">
                <div class="cards__item">
                  <div class="cards__image">
                    <img src={img_400x600}></img>
                  </div>
                  <div class="cards__body">Просто текст</div>
                </div>
              </div>
              <div class="cards__column">
                <div class="cards__item">
                  <div class="cards__image">
                    <img src={img_1300x200}></img>
                  </div>
                  <div class="cards__body">Просто текст</div>
                </div>
              </div>
            </div>
         </section>
```

![](https://github.com/dedmosay/CSS-blog/tree/master/1.path/20.IMG-adaptive/image/simple.jpg)

Как видно, картинки сжались и изображение стало искажаться под формат выбранный ```height: 200px;``` по высоте и заполнению   ```width: 100%; height: 100%;```

## object-fit
Свойство для работы с картинками. 

### fill

Если дописать в текущий код, то ничего не поменяется, так как fill оно стоит по умолчанию. Заполянет содержимое родителя используя свои размеры 
```scss
object-fit: fill;
```

#### contain

Заставляет полностью поместиться внутрь родителя.

```scss
object-fit: contain;
```
![](https://github.com/dedmosay/CSS-blog/tree/master/1.path/20.IMG-adaptive/image/contain.jpg)

#### none

Никак неизменяются в размере, чтобы полностью поместиться
Похож на свойство ```background```

```scss
object-fit: none;
```
![](https://github.com/dedmosay/CSS-blog/tree/master/1.path/20.IMG-adaptive/image/none.jpg)

#### cover

Объекты вписываются в размеры родителя при этом масштабируясь, чтобы отобразить как можно больше полезной информации.

```scss
object-fit: cover;
```
![](https://github.com/dedmosay/CSS-blog/tree/master/1.path/20.IMG-adaptive/image/cover.gif)


## object-position 

Позволяет кадрировать, по умолчанию значение ```center```, можно задать положение например:
-  ```0 0``` - относительно верхний и левый угол.
- ```top``` - верхняя сторона.


## Отзывчивая высота

Родителю добавляем  ```position: relative;```
```scss
    &__image {
        margin: 0px 0px 20px 0px;
        padding: 0px 0px 40% 0px; // <--- Зададим в % вместо фиксированной высоты
        overflow: hidden;
        position: relative; // <---
    }
```
```scss
    &__image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute; // <---
        top: 0;             // <---
        left: 0;            // <---
    }
```

Картинки имеют фиксированный размер при этом отзывчивы при изменении размера сторон

![](https://github.com/dedmosay/CSS-blog/tree/master/1.path/20.IMG-adaptive/image/cover_and_position.gif)

## Картинка в карточке.

## Пример.

```html
         <section class="items">
          <div class="items__title title">
            <div class="items__item">
              <div class="items__image"> 
                <img src={img_1300x400}></img>
              </div>
              <div class="items__body">
                <div class="items__label">Заголовок</div>
                <div class="items__text">
                    Просто текст
                </div>
              </div>
            </div>
            <div class="items__item">
              <div class="items__image"> 
                <img src={img_400x600}></img>
              </div>
              <div class="items__body">
                <div class="items__label">Заголовок</div>
                <div class="items__text">
                    Просто текст
                </div>
              </div>
            </div>
            <div class="items__item">
              <div class="items__image"> 
                <img src={img_800x400}></img>
              </div>
              <div class="items__body">
                <div class="items__label">Заголовок</div>
                <div class="items__text">
                    Просто текст
                </div>
              </div>
            </div>
          </div>
         </section>
```

```scss
.items {

    &__title {
    }

    &__item {
        display: flex;
        margin: 0px 0px 30px 0px;
    }

    &__image {
        flex: 0 0 500px;
    }

    &__image img {
        max-width: 100%; // <---
    }

    &__body {
        flex: 1 1 auto;
        padding: 0px 0px 0px 30px;
    }

    &__label {
        font-size: 20px;
        font-weight: 700;
        display: inline-block;
        margin: 0px 0px 20px 0px;
    }

    &__text {
    }
}
```

Если применить ```max-width:100%``` то все будет более менее ровно, однако если ширина меньше 500px то будет промежуток. Как это исправить см. далее.

![](https://github.com/dedmosay/CSS-blog/tree/master/1.path/20.IMG-adaptive/image/max-width.jpg)


### Применим свойство к object-fit данному примеру

```scss
    &__image img {
        width: 100%;        // <--- заменим с max-width
        height: 100%;       // <---
        object-fit:cover;   // <---
    }
```

Чтобы выровнить все картинки по высоте, прибегнем к свойсту с позиционированием.

```scss
  &__image {
        flex: 0 0 33.333%;      // <--- Чтобы регулировать высоту 500px
        position: relative;     // <---
    }

    &__image img {
        width: 100%;         
        height: 100%;       
        object-fit:cover; 
        position: absolute;         // <---
        top: 0;                     // <---
        left: 0;                    // <---
    }
```


![](https://github.com/dedmosay/CSS-blog/tree/master/1.path/20.IMG-adaptive/image/cover.jpg)

При этом может возникнуть ситуация когда текста меньше чем нужно картинке, тогда чтобы обезопасить себя от этого можно добавить ```min-height```.

```scss
  &__image {
        flex: 0 0 33.333%;      // <--- Чтобы регулировать высоту 500px
        position: relative;     // <---
        min-height: 300px;
    }
```
![](https://github.com/dedmosay/CSS-blog/tree/master/1.path/20.IMG-adaptive/image/min-height.jpg)
