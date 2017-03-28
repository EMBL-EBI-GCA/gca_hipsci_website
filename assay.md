---
layout: default
title: Assays
nav_description: Genomic, proteomic, and phenomic assays on HipSci's cell lines
permalink: /assay/
priority: 80
---

HipSci cell lines undergo thorough characterisation as part of the derivation
pipeline. We profile the cell lines using genomics, epigenomics,
transcriptomics, proteomics, and high content cellular phenotyping techniques.

<nav>
<div class="row navigation">
{% for post in site.categories.assay %}
<div class="col-md-6 col-sm-6 col-xs-6 nav-item">
<a href="{{post.url}}">
<h4 class="nav-title">{{post.title}}</h4>
</a>
</div>
{% endfor %}
</div>
</nav>

## How we use the assay data

1. **Assessing pluripotency** -- Gene expression array data are used
to validate pluripotency of derived IPSCs.  Furthermore, each IPSC line is differentiated
into the three embryonic germ layers and profiled for relevant markers to verify successful differentiation.

2. **Assessing genomic integrity** -- Aneuploidy and subchromosomal aberrations are known to occur in IPSC derivation.
HipSci's QC procedure uses genotyping array data to detect
differences of copy number variation between derived IPS cells and the somatic cells from which they were derived.

3. **Characterisation of the genomic/epi-genomic state of the pluripotent phenotype** --
HipSci's extensive panel of IPSC lines allows for great sensitivity in assessing the correlation
between transcriptional variation and inter-individual genetic variability.
Stem cell biology will benefit from a throrough analysis of the genetic and epigenetic variance
of human iPSC, and how these affect phenotype.
