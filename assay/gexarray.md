---
layout: page
title: Expression array
permalink: /assay/gexarray/
---

Transcription profiling by array is used to measure the activity of genes in
the HipSci cell lines.

All candidate iPS cell lines are assayed, typically two or three per donor, as well as the
somatic cell line from which they were derived (e.g. fibroblasts). The assay is used
as QC before one cell line from each donor is selected for banking. The assay uses the
HumanHT-12 v4 Expression BeadChip Kit from Illumina.

Gene expression array is used for the pluritest, a bioinformatic assay to assess
the pluripotency of iPSC lines based on a training panel of 450 control cell lines.

A key part of HipSci's research is to assess the dependence of gene expression variation in 
IPSCs on various cell line variables and on technical variables. HipSci's extensive data set
from the gene expression array allows for great statistical sensivity in assessing these correlations.

##Getting the data

Complete lists of expression array data can be found under the files tab of
the [cell lines and data browser]({{'/lines/#/files?Assay[]=Expression%20array' | prepend: site.baseurl}})
or in the dataset indexes on the [FTP site](ftp://ftp.hipsci.ebi.ac.uk/vol1/ftp/archive_datasets/).

* [Signal intensity data]({{'/lines/#/files?Assay[]=Expression%20array&Description[]=Array%20signal%20intensity%20data' | prepend: site.baseurl }})
-- Distributed in Illumina idat file format. This binary file can be read by Illumina software.
* [GenomeStudio text file]({{'/lines/#/files?Assay[]=Expression%20array&Description[]=GenomeStudio%20text%20file' | prepend: site.baseurl }})
-- Tab-delimited text files output from Illumina's GenomeStudio software. For each cell line there are 
three text files:
    * sample_probe_profile -- signal intensity per-probe with no normalisation applied
    * quantile_sample_probe_profile -- signal intensity per-probe normalised by the quantile method
    * control_probe_profile -- signal intensities at control probes

For [managed access](/data/faq/find-download-managed-access-files) cell lines, expression array data
files are archived in the [EGA](https://www.ebi.ac.uk/ega/). The
[data browser]({{'/lines/#/files?Assay[]=Expression%20array' | prepend: site.baseurl}}) contains
links to the relevant EGA dataset page, from where researchers can request access to the data.

For [open access](/data/faq/find-download-open-access-files) cell lines, expression array data files
are archived in [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/). Data are openly available
to anybody, and the [data browser]({{'/lines/#/files?Assay[]=Expression%20array' | prepend: site.baseurl}})
contains direct links to the files on the ArrayExpression files download page.
