---
layout: page
title: Proteomic mass spectrometry
permalink: /assay/proteomics/
---

The HipSci project includes mass spectrometry (MS)-based measurements of
protein expression in many of the HipSci cell lines, from both normal and
disease groups. This includes both label-free and TMT measurements of protein
abundance. Work is ongoing to closely integrate the quantitative measurements
of protein expression levels with parallel data generated within HipSci that
document genome sequences and methylation patterns, mRNA expression and cell
phenotypes, measured on the same cell lines.

Our proteomics data set currently spans in total ~17,000 different proteins
that we can detect expressed in human iPS cells, together with >480,000
peptides and ~28 million peptide-spectral matches. The protein data from normal
cell lines are being used to analyse human genetics and to map protein
quantitative trait loci (pQTLs) in iPS cells.

Future plans include expanding the analysis also of phosphorylation sites and
other PTMs in the HipSci cell lines and the analysis of changes in the
proteomic landscape that occur when the iPS cells are differentiated into
different lineages.

###Getting the data

Complete lists of proteomics data can be found under the
[files]({{'/lines/#/files?Assay[]=Proteomics' | prepend: site.baseurl}})
tab by selecting proteomics under the "assay" filter in the
[cell lines and data browser]({{'/lines/#/files?Assay[]=Proteomics' | prepend: site.baseurl}}).

* [Thermo raw mass spectrometry]({{'/lines/#/files?Assay[]=Proteomics&Description[]=Thermo%20raw%20mass%20spectrometry}})
-- Binary files directly from the spectrometer. For each cell line, there are
multiple raw files (typically 16) corresponding to different fractionations.

All the resulting HipSci raw MS data are available for download from the
[PRIDE](http://www.ebi.ac.uk/pride/archive/) repository. In addition, the
corresponding processed MS data can be accessed via the
[Encyclopedia of Proteome Dynamics (EPD)](https://www.peptracker.com/epd/analytics/),
which has a section dedicated to HipSci data. This is a rapidly developing
resource and is regularly updated with new data, new interactive features and
further integration of the proteome data with other HipSci data sets from both
normal and disease cell lines.

These data can be accessed as follows:

* Navigate to [peptracker.com/epd](https://www.peptracker.com/epd/analytics/)
* On the graphical interface click on the circle labelled ‘Stem Cells’ 
* After Stem Cells is selected, the interactive navigation will update itself and display a bubble labelled ‘HipSci’. 
* Click on the HipSci bubble to explore data available for the project. 
* Selecting HipSci will show you two red circles, representing interactive visualisations that can be accessed when clicked upon.

![peptracker epd]({{'/img/epd-1.png' | prepend: site.baseurl}} "Encyclopedia of Proteome Dynamics")

* The red circles represent interactive visualisations made specifically for the HipSci project.
* Clicking on the icon with circles of varying size will open a bubble plot.
  * This plot shows the abundance measurements for every single protein that was detected for every HipSci line.
  * There are two dropdown menus that you can interact with:
    * The first displays either protein abundance, or protein abundance transformed to a log 10 scale, across all HipSci cell lines.
    * The second drop down lets you select specific HipSci cell lines and will draw a new bubble plot showing protein abundance in the selected cell line.
* Clicking on the circle with the image of a bar plot will open a histogram:
  * The first histogram shows the abundance distribution on a log 10 scale
  * This plot also has a dropdown that allows for a selection of a specific HipSci cell line

![peptracker epd]({{'/img/epd-2.png' | prepend: site.baseurl}} "Encyclopedia of Proteome Dynamics")

Additionally, the EPD allows users to search for specific proteins of interest,
based on uniprot protein IDs, which displays results that highlight data for
the selected protein in the HipSci cell lines. The navigation pane has a text
box labelled ‘Protein Search’, as displayed bellow.

![peptracker epd]({{'/img/epd-3.png' | prepend: site.baseurl}} "Encyclopedia of Proteome Dynamics")

You can search for proteins based on either a description, gene, name or Uniprot accession. When you have selected a protein of interest this will modify the output you receive from the interactive plots.
*  The Bubble plots will adapt to show you the abundance of the specific protein of interest across all HipSci cell lines where that protein has been detected.
*  The histogram will highlight in red the abundance bin where the protein of interest is located.

![peptracker epd]({{'/img/epd-4.png' | prepend: site.baseurl}} "Encyclopedia of Proteome Dynamics")
