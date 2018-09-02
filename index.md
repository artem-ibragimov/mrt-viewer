---
layout: page
title: 20 сентября 2018
excerpt:
comments: true
---

Мы расскажем, как уместили в одном решении 20 различных приложений, которыми пользуется каждая 2-я российская компания! А также, как добиться высокого коэффициента «переиспользования» кода... Ведущие JS разработчики компании «Тензор» поделятся уникальным опытом на RTF 18!

И, конечно, как без подарков! Тебя ждет сюрприз – праздничная лотерея с памятными призами!

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

Итак, 20 сентября в 18:30 состоится первая встреча программистов в рамках RTF –2018. На все доклады отведено 3 часа. Перед и во время выступлений запланированы 10-минутные кофе-брейки, чтобы вы могли перекусить. А после, приходи на after-party, где можно будет пообщаться на свободные темы —не расходитесь :)

Дата: 20/09/2018, четверг.

Время: с 18.30 до 21.30.

Вход – free.

Где
---

Встреча пройдет в ТРЦ «VIKONDA», Вход через отель, 1 этаж. По адресу: г. Рыбинск, Бабушкина 29.

Маршрут от остановки общественного транспорта указан на карте.

Места для парковки автомобилей указаны на карте зеленым цветом.

Контактные телефоны: +7(920) 653-51-73 Полина


<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acd52f8c116e73c39bb701429ca0e459d78ce8793e4e75da7c77b2f9773f0cddc&amp;width=687&amp;height=502&amp;lang=ru_RU&amp;scroll=true"></script>


Цель
---

Создать ИТ –площадку в Рыбинске для регулярного неформального общения разработчиков. Мы ищем единомышленников, объединенных “по технологическому признаку”, занимающихся разработкой (JavaScript, HTML, CSS, Python, SQL и т.д.).

Формат
---

Тематические встречи, каждая из которых состоит из 3-4 докладов (по 20-30 минут). После мероприятия традиционно устраиваем неформальное общение для обсуждения затронутых тем и других направлений.


<!--
<ul class="post-list">
{% for post in site.posts limit:10 %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>
-->

[register]: /register/
[place]: http://territory3000.ru/
[tensor]: http://tensor.ru/
[speakers]: /speakers/
