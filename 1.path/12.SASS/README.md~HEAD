## sass-scss.ru

## Вложенность &
- Не нужно искать блок, чтобы добавить стили, достаточно просто вставить класс с названием

```html
    <div class="block">
        My first <span>block</span>
    </div>
```

```scss
    .block {
        color: green; 
        font-size: 18px;
        line-height: 20px;
        span {
            color: red;
        }
    }
```

##### &

```html
<a href="#" class="link" >Яндекс</a>
```
```scss
.link {
    color:blue;
    text-decoration: overline;
    &:hover {
        color: red;
    }
}
```
##### .blok .link = .block &{...}
```html
<a href="#" class="link" >Яндекс</a>
```
```scss
.link {
    color:blue;
    text-decoration: overline;
    .block &{
        font-size:100px;
    }
    &:hover {
        color: red;
    }
}
```

## Переменные $
- Позволяет создавать собственную палитру цветов
- Делать определенный размер шрифтов и т д
```scss
$fz:80px;
$color_1: red;
$color_2: blue;

.block {
    padding: 20px;
    color: $color_1;
}
```
## Импортирование @import
```scss
@import "nullstyle.scss";
```
## Шаблоны % @extend
Применим красный пуктир к ссылке @extend %tplborder;

```scss
%tplborder{
    border-bottom: 2px dashed $color_1;
}

.link {
    @extend %tplborder;
    &:hover {
        color: red;
    }
}
```
## Миксины @mixin
Можно использовать как шаблон и дополнительно передавать параметры
```scss
@mixin fontz ($f, $c) {
    font-size: $f; 
    color: $c;
    background-color: green;
}

.block {
    @include fontz(100px, red);
}
```

## Математика
```scss

.block {
    width: 300px / 960px * 100%;
    background-color: #ddd;
}
```
