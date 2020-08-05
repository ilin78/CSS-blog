## Flex-Direction

Свойство ```flex-direction``` устанавливает основную ось, по которой выстраиваются flex-элементы.

По умолчанию:

```scss
.block {
    &__row {
        display: flex;
        flex-direction: row;
    }
}
```

- ```row``` по умолчанию;
- ```row-reverse``` разворачивает поведение элементов (flex-контейнер); 
- ```column``` заставляет flex-элементы встать в колонку;

```css
    display: flex;
    flex-direction: row;
```
![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/16.FLEXBOX/image/flex-direction_row.jpg)

```css
    display: flex;
    flex-direction: row-reverse;
```
![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/16.FLEXBOX/image/flex-direction_row-reverse.jpg)


```css
    display: flex;
    flex-direction: row;
```
![](https://github.com/dedmosay/CSS-blog/blob/master/1.path/16.FLEXBOX/image/flex-direction_column.jpg)

