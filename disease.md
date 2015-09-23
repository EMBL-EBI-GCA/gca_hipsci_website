---
layout: mdpage
title: Disease cohorts
permalink: /disease/
---

   The HipSci project is generating iPS cell lines from patients with inherited genetic diseases.
   iPSC technology provides opportunity for modelling human disease in the culture dish.
   The HipSci collection of cell lines also includes a large number from phenotypically 'normal' donors, with no diagnosed genetic disease.

{% for post in site.categories.disease %}
* [ {{ post.title }} ]( {{ post.url | prepend: site.baseurl }} )
{% endfor %}