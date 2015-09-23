---
layout: mdpage
title: Assays
permalink: /assay/
---

HipSci cell lines are assayed with a number of genomic assays throughout the iPSC derivation pipeline.

Assay data are used in the project for:

1. Quality control of the derived cell lines, to validate pluripotency
2. Characterisation of the genomic/epi-genomic state of the pluripotent phenotype

The HipSci project is generating iPS cell lines from patients with inherited genetic diseases.
iPSC technology provides opportunity for modelling human disease in the culture dish.
The HipSci collection of cell lines also includes a large number from phenotypically 'normal' donors, with no diagnosed genetic disease.

##Assay pages

{% for post in site.categories.assay %}
* [ {{ post.title }} ]( {{ post.url | prepend: site.baseurl }} )
{% endfor %}