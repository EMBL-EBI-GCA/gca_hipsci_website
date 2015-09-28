---
layout: page
title: Publications
permalink: /publication/
tags:
    - publication
---

{% assign posts = site.categories.publication | sort: 'date' %}
{% for post in posts reversed %}
###[{{post.title}}]({{post.url}})

{{post.pub_authors}}

{{post.pub_ref}}
{% endfor %}
