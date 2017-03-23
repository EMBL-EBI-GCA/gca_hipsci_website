---
layout: assay
title: Exome sequencing
permalink: /assay/exomeseq/
browser_text: Exome sequencing files
browser_link: /files?Assay[]=Exome-seq
---

Exome sequencing is performed on all HipSci iPS cell lines that are selected for banking
after passing QC. Sequencing and primary analysis are performed at the
Wellcome Trust Sanger Institue.

##Primary analysis

HipSci's exome-seq analysis pipeline comprises these steps:

1. Map sequence reads to the human GRCh37 reference with [BWA](https://github.com/lh3/bwa)
2. Post-alignment improvements:
    * Realign around known indels using GATK
    * Recalibrate base quality score recalibration using GATK
    * Merge sequencing runs from the same cell line.
    * Calculate bq score with samtools
3. Call variants using samtools mpileup and bcftools
4. Phase haplotypes using SHAPEIT
5. Impute genotypes using IMPUTE2

The following filters are applied to called variants:

* minimum read depth DP<=4
* maximum read depth DP>2000
* minimum mapping quality MQ<=25
* minimum quality for SNPs QUAL<=30
* minimum quality for indels QUAL<=60

##Getting the data

Complete lists of exome-seq data can be found under the files tab of
the [cell lines and data browser]({{'/lines/#' | append: page.browser_link | prepend: site.baseurl}})
or in the dataset indexes on the [FTP site](ftp://ftp.hipsci.ebi.ac.uk/vol1/ftp/archive_datasets/).

* [Raw sequencing reads]({{'/lines/#/files?Assay[]=Exome-seq&Description[]=Raw%20sequencing%20reads' | prepend: site.baseurl }})
-- Distributed in the cram file format. Any cell line
can have multiple associated cram files; each corresponds to a single lane of sequencing.
* [BWA alignment]({{'/lines/#/files?Assay[]=Exome-seq&Description[]=BWA%20alignment' | prepend: site.baseurl }})
-- Distributed in the bam file format. These are the input files used for variant calling, after the post-alignment improvements.
We distribute one bam file per cell line.
* [Mpileup variant calls]({{'/lines/#/files?Assay[]=Exome-seq&Description[]=mpileup%20variant%20calls' | prepend: site.baseurl }})
-- Distributed in vcf file format. These are the genotypes called directly from the aligned sequence, before phasing or imputation.
We distribute a single-sample vcf file for each cell line.
* [Imputed and phased genotypes]({{'/lines/#/files?Assay[]=Exome-seq&Description[]=Imputed%20and%20phased%20genotypes' | prepend: site.baseurl }})
-- Distributed in vcf file format. These contain the output
from SHAPEIT and IMPUTE2. We distribute a single-sample vcf file for each cell line, containing
genotypes imputed to the 1000genomes and UK10K reference panels.

For [managed access]({{ '/data/access' | prepend: site.baseurl }}#managed%}) cell lines, exome-seq
files are archived in the [EGA](https://www.ebi.ac.uk/ega/). The
[data browser]({{'/lines/#' | append: page.browser_link | prepend: site.baseurl}}) contains
links to the relevant EGA dataset page, from where researchers can request access to the data.

For [open access]({{ '/data/access' | prepend: site.baseurl }}#open) cell lines, exome-seq files
are archived in [ENA](http://www.ebi.ac.uk/ena/data/view/ERP006946). Data are openly available
to anybody, and the [data browser]({{'/lines/#' | append: page.browser_link | prepend: site.baseurl}})
contains direct links to the files on the ENA FTP server.

##Resources

HipSci's FTP site contains:

* The [reference genome](ftp://ftp.hipsci.ebi.ac.uk/vol1/ftp/reference/) used for alignment
* [Known sites and known indels](ftp://ftp.hipsci.ebi.ac.uk/vol1/ftp/reference/) used for realignment and base quality recalibration
