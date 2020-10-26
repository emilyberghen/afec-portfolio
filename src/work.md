---
title: 'Work'
layout: 'layouts/page.html'
custom_css: 'body {background-color: #fff; color: #155942;} header h1 a, header nav ul li a {color: #155942;}'
---

### Werken

{% for item in collections.featuredWork %}
  <a href="{{ item.url }}">
    <p>{{ item.data.title}}</p>
    <!-- <img src="{{ item.data.image }}" alt="{{ item.data.summary }}"/> -->
  </a>
{% endfor %}
