---
title: 'Work'
layout: 'layouts/page.html'
body_class: 'work'
# custom_css: 'body {background-color: #fff; color: #155942;} header h1 a, header nav ul li a {color: #155942;}'
---

{% for item in collections.featuredWork %}
  <article>
    <div class="text">
      <h2> {{ item.data.title}} </h2>
      <p> {{ item.data.summary}} </p>
    </div>
    <div class="img">
      <img src="{{ item.data.image}}" alt="image for {{ item.data.title}}"></img>
    </div>
    </article>
{% endfor %}
