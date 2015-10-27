---
layout: assay
title: Proteomic mass spectrometry
tags:
    - assay
browser_text: Proteomics data files
browser_link: /files?Assay[]=Proteomics
---

The proteomics project at Dundee has developed a
proteomics quantification strategy for HipSci cell lines
from mass spectrometry data.

The proteomics protocol works with
protein samples extracted from frozen iPSC lines. This reduced time and cell
culture costs by minimizing the number of cells needed and avoiding having to
amplify the cells.

To assess data quality, we have carried out comparisons between technical and 
biological replicates (proteome abundance) and the corresponding
mRNA levels across multiple HipSci lines.

##Getting the data

Complete lists of proteomics data can be found under the files tab of
the [cell lines and data browser]({{'/lines/#' | append: page.browser_link | prepend: site.baseurl}})

* [Thermo raw mass spectrometry]({{'/lines/#/files?Assay[]=Proteomics&Description[]=Thermo%20raw%20mass%20spectrometry}})
-- Binary files directly from the spectrometer. For each cell line, there are
multiple raw files (typically 16) corresponding to different fractionations.

Proteomics data files will all be archived by
[PRIDE](http://www.ebi.ac.uk/pride/archive/), and in the interim we are making
all data available on the [HipSci FTP site](ftp://ftp.hipsci.ebi.ac.uk/vol1/ftp/data/proteomics/).

