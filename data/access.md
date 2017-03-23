---
layout: data
title: Open access and managed access data
nav_description: Who can access HipSci's genomic assay data?
permalink: /data/access/
nav: true
---

This page describes the classification of any HipSci data as:

* Either [individually unique](#unique) or [non-unique](#non-unique)
* Either [managed access](#managed) or [open access](#open)

The following statements are guidelines only. We have policy documents
describing how to manage these data types. For general queries please contact [hipsci-dcc@ebi.ac.uk](mailto:hipsci-dcc@ebi.ac.uk) for
information. For any queries relating to managed access data please contact the HipSci Data Access Administrator [wtsidata1@sanger.ac.uk](mailto:wtsidata1@sanger.ac.uk) for information.


###Individually unique data<a name="unique"></a>

Individually unique data are uniquely associated to the cell line's donor. In particular, data comprising genetic information are classed as individually unique.

Individually unique data can be subject to [managed-access](#managed) restrictions, depending on the consent agreement signed by the sample donor.

Examples of individually unique data are:

* Genotypes called from genotyping array or exome-seq
* Sequencing data from exome-seq or RNA-seq

###Non-unique data<a name="non-unique"></a>

Non-unique data are not uniquely linkable to the sample donor. All of HipSci's non-unique data can be distributed [openly](#open); they are not subject to [managed-access](#managed) restrictions.

Examples of non-unique data are:

* Transcript expression quantifications from RNA-seq
* Proteomics mass spectrometry
* Cellular phenotyping measurements

###Managed access data<a name="managed"></a>

The consent agreement of some HipSci donors authorises release of [individually unique data](#unique)
only for specific research use to bona fide researchers.
['Managed access data'](#managed) refers to [individually unique data](#unique) from these donors.

Managed access data are store in the [EGA](http://www.ebi.ac.uk/ega) archive.
For access to
these data, researchers must read the Data Access Agreement document ([pdf]({{site.baseurl}}/documents/HipSci_Normals_DAA_v3.2_form.pdf), [doc]({{site.baseurl}}/documents/HipSci_Normals_DAA_v3.2_form.doc)) and
register for access via WTSI's [Electronic Data Access Mechanism](https://www.sanger.ac.uk/legal/DAA/MasterController).

###Open access data<a name="open"></a>

The consent agreement of some HipSci donors authorises release of [individually unique data](#unique)
to all parties, with no requirement to satisfy any data access restrictions.

['Open access data'](#open) refers to:

1. [Non-unique data](#non-unique) from any donor
2. [Individually unique data](#unique) from donors who have consented to unrestricted data release.

###Chromosome Y

[Individually unique data](#unique) (i.e. genotypes) from the male chromosome Y are
classed as [managed access data](#managed) for all HipSci donors. This includes donors
whose consent agreement allows the free distribution of genotype data from
other chromosomes.

Y chromosome data have been stripped from any file containing genetic data in any open access data archives.

##Access status in the data browser

Cells lines in the [HipSci data browser]({{site.baseurl}}/lines) are marked
with their access status. Cell lines can be filtered by access status using the filter options.

* [Managed access]({{site.baseurl}}/lines?Data%20Access[]=Managed%20access)
* [Open access]({{site.baseurl}}/lines?Data%20Access[]=Open%20access)
