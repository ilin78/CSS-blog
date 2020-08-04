# Flex 

Короткая запись flex:

- 1 grow
- 2 shrink 
- 3 basis

Таким образом получится:
```scss 
    flex: 0 1 auto;
```



С помощью БЭМ, модификатора можно определить flex отдельного элемента.

```html
<div class="block">
    <div class="block__row">
        <div class="block__column block__column_1">
            <div class="block__item">1</div>
        </div>
        <div class="block__column block__column_2">
            <div class="block__item">2</div>
        </div>
        <div class="block__column block__column_3">
            <div class="block__item">3</div>
        </div>
    </div>
</div>
```
- .block__column_1...3

```scss
.block {
  &__row {
    display: flex;
    align-items: center;
    border:20px solid #feddef;
    margin-bottom: 20px;
  }
  &__column {
    border:20px solid #deffed;
    
    &_1{
      align-items: flex-start;
    }
    
    &_2{}
  
    &_3{
      align-items: flex-end;
    }
  }
```

## order

Порядок вывода.

```scss
    &_1{
      order: 3;
    }
    
    &_2{
      order: 2;
    }
  
    &_3{
      order: 1;
    }
```

## flex-basis
Базовый размер элемента.

```scss
    flex-basis: auto;
```

- ```auto``` размер занимаемый контентом ```flex-basisauto.jpg```

- ```20%```  размер занимаемый контентом 20% ```flex-basis20.jpg```

## flex-grow

Контроллирует возможность увеличиваться в размере относительного базового размера.

По умолчанию:

```scss
    flex-grow: 0;
```

```flex-grow0.jpg```

Залить полностью:

```scss
    flex-grow: 1;
```

```flex-grow1.jpg```


## flex-shrink

Контроллирует, может ли flex-элемент становиться меньше, чем указанный базовый размер.

- 0 запрещает уменьшаться в размере, чем указанный базовое значение 200px
```scss
    flex-grow: 1;
    width: 200px;
    flex-shrink: 0;
```
```flex-shrink0.jpg```

- 1 разрешает уменьшаться в размере.
```scss
    flex-grow: 1;
    width: 200px;
    flex-shrink: 1;
```
```flex-shrink1.jpg```


