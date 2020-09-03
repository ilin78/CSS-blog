## GRID

# ЧАСТЬ 2

### Особенности 

#### 1 span 

```span``` как только становится элементом сетки, станет блочным элементом автоматический и на них действуют те же свойства и правила как для блочного объекта.
```html
<div className="grid__item">1</div>
<span className="grid__item">2</span>
```
#### 2 margin

```scss
.grid {
		&__item {
      margin: 30px;
      text-align: center;
      border: 2px dashed #aaa;
      padding: 30px;
    }
}
```

![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/19.Grid/image/grid-margin.jpg)

### Размещение элементов с помощью элементов сетки

#### - С помощью свойств ```row``` и ```column```
по умолчанию у них значение ```auto```, что означает - элементы размещаются автоматический по сетке.

```grid-row-start: 1;``` - Начало 1й строки
```grid-row-end: 3;```  - Конец перед 3й строки

```grid-column-start: 1;```  - Начало 1 столбца
```grid-column-end: 3;```  - Конец перед 3м столбцом

```scss
 //Картинка слева
.item {
  &_1 {
    color: red;
    background-color: #345;
    
    grid-row-start: 1;
    grid-row-end: 3;

    grid-column-start: 1;
    grid-column-end: 3;
  }
  ```
  ```scss
 // Картинка справа
.item {
  &_1 {
    color: red;
    background-color: #345;

    grid-row-start: 4;
    grid-row-end: 2;

    grid-column-start: 2;
    grid-column-end: 4;

  &_2 {
  }

```
![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/19.Grid/image/grid-column-row_(start-end).jpg)

#### - С помощью значения ```span```

Занимает нужное количество строк и столбцов не прибегая к релокации

```scss

.item {
  &_1 {
 
  }

  &_2 {
    color: red;
    background-color: #345;
    
    grid-row-start: span 4; // Занять 4 строки
    grid-column-start: span 2;  // Занять 2 колонки
  }
```

![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/19.Grid/image/grid-span.jpg)
  

#### - Задавать имена линиям сетки, и в последствии размещать элемент уже по данной линии.

```scss
.grid { 
...
		&__body {
      display: grid;
      grid-template-rows: [start] 1fr [row] 1fr [row-end];
      grid-template-columns: [start] 1fr [col2] 1fr [col3] 1fr [col-end];
    }
... 
}
```
Пример использования перемещения ячейки вдоль линии.

```scss
.item {
  &_1 {
    color: red;
    background-color: #345;
    
    grid-row-start: start;
    grid-column-start: col3;
  }
...
}
```

![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/19.Grid/image/start-line.jpg)



- Короткая и удобная запись перемещения по ячекам, позволяет обратиться и заполнить нужные поля (на примере выделен желтым цветом)

```scss
&_2 {
  color: yellow;
  background-color: #345;
  grid-row: 1/3; // с 1 до 3 строки
  grid-column: 1/2; // c 1 до 2 колонки
}
```
![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/19.Grid/image/row-column.jpg)

- Так же можно задавать индекс каждому элементу и управлять с помощью него порядок и место положение (результат будет получен в обратном порядке)

```scss
.item {
  &_1 { order: 6; }

  &_2 { order: 5; }

  &_3 { order: 4; }

  &_4 { order: 3; }

  &_5 { order: 2; }

  &_6 { order: 1; }
}

```

- Выравнивание элементов сетки

```justify-items: stretch;``` - По умолчанию.
```justify-items: start;``` - Начало.
```justify-items: end;``` - Конец.
```justify-items: center;``` - Выравнить поцентру горизонта

```align-items: stretch;``` - По умолчанию.
```align-items: start;``` - Начало.
```align-items: end;``` - Конец.
```align-items: center;``` - Выравнить поцентру по вертикали

![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/19.Grid/image/items.jpg)

По умолчанию свойства сетки
```scss
		&__body {
      display: grid;
      justify-items: stretch;  
      align-items: stretch; 
    }
``` 
А свойства элементов заполняют всю ячейку
```scss
.item {
  &_1 {
    color: red;
    background-color: #345;
    align-self: stretch;
    justify-self: stretch;
  }
  ...
}
```

- Выравнивание расстояния между элементами

Можно задавать ```gap: 20px;```  или по отдельности (в примере ниже)
```scss
		&__body {
      display: grid;
      grid-template-rows: [start] 1fr [row] 1fr [row-end];
      grid-template-columns: [start] 1fr [col2] 1fr [col3] 1fr [col-end];
      row-gap: 50px;
      column-gap: 100px;
    }
```


![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/19.Grid/image/gap.jpg)
