## Блок-Элемент-Модификатор

# Блок
Блок - функционально независимый компонент страницы.

Может содержать:
- Логотип
- Меню
- Title
- Sub-title
- и т д

Чем лучше имена Блока будут отражать содержимое, тем проще будет ориентироваться в коде.

1. Блоки можно вкладывать друг в друга.
2. Допустима любая вложенность блоков.

# Элемент
Элемент - это состовная часть блока, которая не может использоваться в отрыве от него.

Должен отвечать на вопрос <Что это?> 

Синтаксис.
```
ИМЯКЛАССАБЛОКА _ _ ИМЯЭЛЕМЕНТА
```

Пример.
Есть меню, оно состоит из 4 пунктов, так это и есть 4 <элемента>

```html
<nav class="menu">
    <a href="" class="menu__link"></a>
    <a href="" class="menu__link"></a>
    <a href="" class="menu__link"></a>
    <a href="" class="menu__link"></a>
</nav>
```

### Вложенность элементов
 
- Допустима любая вложенность элементов;
- Элемент это всегда часть блока, а не другого элемента;
- Элемент не всегда является частью блока;

```html
<div class="about">
    <div class="about__title"></div>
    <div class="about__subtitle"></div>
</div>
```

- Элемент необязательный компонент блока;

# Модификатор

Дополняет\уточняет стиль блока либо элемента;

Должен отвечать на вопрос:
- <Какой?> 
- <Как выглядит?>
- <Состояние>

Модификатор дописывается классу блока либо элемента.

```
ИМЯКЛАССАБЛОКА _ МОДИФИКАТОР
ИМЯКЛАССАБЛОКА _ _ ИМЯЭЛЕМЕНТА _ МОДИФИКАТОР
```

# МИКС

- Позволяет использовать и блоки и элементы.

```html
<div class="about">
    <div class="about__title title"></div>
    <div class="about__subtitle subtitle"></div>
</div>
```

## Пример

Полный пример использования блоков.
A*, B*, C* -  псевдоназвание блока.

- HTML

```html
      <div className="wraper">                        <!--Основной блок-->
        <div className="content">                     <!--Блок в который помещаем весь контент-->
          <div className="A">                        <!--Отдельный блок с котрыйм будем работать в данной области-->
            <div className="container">               <!--Основной блок-->
              <div className="A__row">               <!--Положение элементов в этом блоке-->
                <div className="A__body">            <!--Блок в котрый разместим весь текст относящийся к этому блоку A__body-->
                  <div className="A__title"> Размещаем заголовок текста</div>
                  <ul className="A__list">
                    <li>Просто текст.</li>
                    <li>Просто текст.</li>
                    <li>Просто текст.</li>
                  </ul>
                </div>
                <div className="A__image">           <!--Картинка в блоке A__image-->
                  <img className="A__image_size" src={myBlog} alt="" />
                </div>
            </div>
          </div>
           <div className="B"> <!--Отдельный блок с которым будем работать в данной области-->  </div> 
           <div className="C"> <!--Отдельный блок с которым будем работать в данной области-->  </div> 
         </div>
      </div>
```



- SCSS

```scss
.wraper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 900px;
  margin: 0px auto;
}

.content {
  border: 3px solid #445162;
  flex-grow: 1;     // Залить полностью
  flex-shrink: 1;   // Разрешает уменьшаться в размере
  flex-basis: auto; // Размер занимаемый контентом
  margin-bottom: 90px;
}

.A {
    background-color: #deffed;
    padding: 50px 0px ;
    &__row {
        display: flex;
        justify-content: space-between;
    }
    &__body {
        color: steelblue;
        padding: 0 30px 0 0;
    }
    &__title {
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3 );
        font-size: 40px;
        margin-bottom: 38px;
    }
    &__list {
    }

    &__list li {
        background: url('./img/icon.png') 0 1px no-repeat;
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3 );
        padding: 0 0 0 22px;
        line-height: 22px;
        font-size: 18px;
        margin-bottom: 14px;
    }

    &__list li:last-child {
        margin: 0;
    }
    &__image {
        &_size {
            width: 300px;
            border-radius: 5px;
        }
    }
}
```
