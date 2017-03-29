---
layout: page
title: Genotyping by array
permalink: /assay/gtarray/
---

HipSci assays for genotypes in all candidate iPS cell lines, typically two or three per donor, and in the somatic
cell lines from which they were derived (e.g. fibroblasts). The assay is used
as QC before one cell line from each donor is selected for banking. The assay uses the
HumanCoreExome-12 v1 BeadChip Kit from Illumina.

HipSci's QC procedure is to
compare the called genotypes between the primary and derived cells of the
same donor, to ensure genomic integrity in the derived lines.
Aneuploidy and subchromosomal aberrations are detected from genotyping arrays
by detecting differences in copy number between the original fibroblasts and iPSCs
using a HMM algorithm detected for the purpose

###Getting the data

Complete lists of genotyping array data can be found under the files tab of
the [cell lines and data browser]({{'/lines/#/files?Assay[]=Genotyping%20array' | prepend: site.baseurl}})
or in the dataset indexes on the [FTP site](ftp://ftp.hipsci.ebi.ac.uk/vol1/ftp/archive_datasets/).

* [Signal intensity data]({{'/lines/#/files?Assay[]=Genotyping%20array&Description[]=Array%20signal%20intensity%20data' | prepend: site.baseurl }})
-- Distributed in Illumina idat file format. This binary file can be read by Illumina software.
* [Genotyping array calls]({{'/lines/#/files?Assay[]=Genotyping%20array&Description[]=Genotyping%20array%20calls' | prepend: site.baseurl }})
-- Distributed in vcf file format and in Illumina's genotyping console gtc format.  These are the genotypes called directly from the signal intensities, before phasing or imputation.
We distribute a single-sample vcf and a single-sample gtc file for each cell line.
* [Imputed and phased genotypes]({{'/lines/#/files?Assay[]=Genotyping%20array&Description[]=Imputed%20and%20phased%20genotypes' | prepend: site.baseurl }})
-- Distributed in vcf file format. These contain the output
from SHAPEIT and IMPUTE2. We distribute a single-sample vcf file for each cell line, containing
genotypes imputed to the 1000genomes and UK10K reference panels.


For [managed access](/data/faq/find-download-managed-access-files) cell lines, genptyping array data
files are archived in the [EGA](https://www.ebi.ac.uk/ega/). The
[data browser]({{'/lines/#/files?Assay[]=Genotyping%20array' | prepend: site.baseurl}}) contains
links to the relevant EGA dataset page, from where researchers can request access to the data.

For [open access](/data/faq/find-download-open-access-files) cell lines, the signal intensity data files
are archived in [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/) and the variant call files
are archived in [EVA](http://www.ebi.ac.uk/eva/)
Data are openly available
to anybody, and the [data browser]({{'/lines/#/files?Assay[]=Genotyping%20array' | prepend: site.baseurl}})
contains direct links to the files on the ArrayExpression files download page and the EVA ftp site.
