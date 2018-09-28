---
layout: page
title: 17 октября 2018
excerpt:
comments: true
---
Мы расскажем, как уместили в одном решении 20 различных приложений, которыми пользуется каждая 2-я российская компания!
А также, как добились высокого коэффициента «переиспользования» кода...
Ведущие JS азработчики компании «Тензор» поделятся уникальным опытом на KTF 18!

[**Регистрируйся**][register] и приходи – мы ждем тебя!
	
Доклады
-------

<ul class="post-list">
{% for post in site.categories.talks %}
  {% if post.author %}
    {% capture authorslist %}
      {% for a in post.author %}
        {% assign author = site.data.authors[a] %}
        {% if author %} {{ author.name }}{% if author.company %}, {{ author.company }}{% endif %}{% endif %}{% unless forloop.last %};{% endunless %}
      {% endfor %}
    {% endcapture %}
  {% endif %}
  {% if post.announce %}
  <li><a href="{{ site.url }}{{ post.url }}"><b>{{ post.title }}</b><br/>{{ authorslist }}</a></li>
  {% endif %}
{% endfor %}
</ul>


Когда
-----

Итак, 17 октябряв 18:30 состоится втораявстреча программистов в рамках KTF –2018.
На все доклады отведено 3 часа.
Между выступлениями запланирован 10-минутный кофе-брейк, чтобы вы могли перекусить.
Для первых 30-ти зарегистрировавшихся after-party за счет компании!))

Дата: 17/10/2018, среда.
Время: с 18.30 до 21.30.

__Вход – free.__


Где
---

Встреча пройдет по адресу: г. Казань, ул. Профсоюзная, 16 Б.
Маршрут от остановки общественного транспорта указан на карте.
Места для парковки автомобилей указаны на карте зеленым цветом.

<script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script><script charset="utf-8">new DGWidgetLoader({"width":640,"height":600,"borderColor":"#a3a3a3","pos":{"lat":55.791570974424694,"lon":49.11406874656678,"zoom":16},"opt":{"city":"kazan"},"org":[{"id":"70000001018741959"}]});</script><noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript>

__Контактные телефоны: +7 (951) 067-12-77 Ангелина__
<!--
<ul class="post-list">
{% for post in site.posts limit:10 %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>
-->

[register]: /register/
[place]: http://rybinsk.vikonda.ru/
[tensor]: http://tensor.ru/
[speakers]: /speakers/
