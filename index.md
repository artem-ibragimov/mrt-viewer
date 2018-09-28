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

<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae4c13f764a4abf7e58554f2ddabe53703db719949ac4646f163a80e67faeeadc&amp;width=800&amp;height=600&amp;lang=ru_RU&amp;scroll=true"></script>

__Контактные телефоны: +7 (951) 067-12-77 Ангелина__

[register]: /register/
[place]:    https://kompaniya-tenzor-events.timepad.ru/event/814956/
[tensor]:   http://tensor.ru/
[speakers]: /speakers/
