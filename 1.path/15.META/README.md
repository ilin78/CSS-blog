# <meta>
Определяют для чего будет использоваться мета-тег
```html
<head>
    <meta name="" content="">
    <meta http-equiv="" content="">
    <meta property="" content=""> 
</head>
```
- Отображение контента;
- Теги для SEO;
- Технические мета теги;
- Теги для социальных сетей;

# CONTENT
Кодировка страницы
```html
<meta charset="UTF-8">
```
Фиксировая ширина
```html
<meta name="viewport" content="width=1170">
```
Адаптивная верстка
```html
 <meta name="viewport" content="width=device-width">
```
- ```inital-scale=1.0``` Изначальный масштаб страницы;
- ```maximum-scale=1.0```     Максимальный масштаб страницы;
- ```user-scale=0```          Запрет масштабирования контента;

Отключает формирование ссылки у номера на IOS
```html
<meta name="format-detection" content="telephone=no">
```

# SEO

Краткое описание страницы
```html
<meta name="description" content="Описание до 140 символов" >
<meta name="keywords" content="Ключевые слова, до 20 слов" >
<!--Запрет индексации на странице-->
<meta name="robots" content="noimageindex, nofolow">
```

Авторские мета теги
```html
<meta name="Author"     content="">
<meta name="Copyright"  content="">
<meta name="Address"    content="">
```

# Технические теги

Перенаправление пользователя либо обновление текущей страницы

```html
<meta http-equiv="refresh" content="0(секунд задержки); url=">
```

# Социальные сети

```html
<!-- локализация сайта, для русскоязычного сайта ru_RU -->
<meta property="og:locale" content="ru_RU">
<!-- тип контента, по умолчанию используется article -->
<meta property="og:type" content="article">
<!-- заголовок страницы, который будет выводится в записи социальной сети -->
<meta property="og:title" content="META теги">
<!-- описание страницы -->
<meta property="og:description" content="Описание страницы про META теги">
<!-- ссылка на изображение, которое будет публиковаться в записи -->
<meta property="og:image" content="http://">
<!-- ссылка на текущую страницу -->
<meta property="og:url" content="http://">
<!-- название сайта -->
<meta property="og:site_name" content="Название сайта">
```