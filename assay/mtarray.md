---
layout: page
title: Methylation array
permalink: /assay/mtarray/
---

Methylation profiling by array is used to probe the methylation pattern of DNA,
which is a suppressor of gene activity. Methylation is used in HipSci's assessment
of variability in the pluripotent phenotype, and it's dependence on genetic and techncial
factors.

HipSci assays iPS cell lines that are selected for banking after they have passed QC, typically
one cell line per donor. The
assay uses the Illumina HumanMethylation450 BeadChip v1.0


###Getting the data

Complete lists of methylation array data can be found under the files tab of
the [cell lines and data browser]({{'/lines/#/files?Assay[]=Genotyping%20array' | prepend: site.baseurl}})
or in the dataset indexes on the [FTP site](ftp://ftp.hipsci.ebi.ac.uk/vol1/ftp/archive_datasets/).

* [Signal intensity data]({{'/lines/#/files?Assay[]=Methylation%20array&Description[]=Array%20signal%20intensity%20data' | prepend: site.baseurl }})
-- Distributed in Illumina idat file format. This binary file can be read by Illumina software.
There are two single-sample idat files for each cell line, corresponding to the red and green channels
of the BeadChip.
* [Text files with probe intensities]({{'/lines/#/files?Assay[]=Methylation%20array&Description[]=Text%20file%20with%20probe%20intensities' | prepend: site.baseurl }})
-- Tab-delimited text files with probe intensities for each probe. We distribute one single-sample
text file for each cell line.

For [managed access](/data/faq/find-download-managed-access-files) cell lines, methylation array data
files are archived in the [EGA](https://ega-archive.org/). The
[data browser]({{'/lines/#/files?Assay[]=Genotyping%20array' | prepend: site.baseurl}}) contains
links to the relevant EGA dataset page, from where researchers can request access to the data.

For [open access](/data/faq/find-download-open-access-files) cell lines, methylation array data files
are archived in [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/). Data are openly available
to anybody, and the [data browser]({{'/lines/#/files?Assay[]=Genotyping%20array' | prepend: site.baseurl}})
contains direct links to the files on the ArrayExpression files download page.
