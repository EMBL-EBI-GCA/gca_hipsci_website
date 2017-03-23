---
layout: data
title: HipSci Track Hubs
nav_description: Visualising HipSci data in UCSC and Ensembl genome browsers
redirect_from:
    - /trackhubs/
permalink: /data/trackhubs/
nav: true
---
HipSci data has been made available in a [Track Hub](http://genome.ucsc.edu/goldenPath/help/hgTrackHubHelp.html) for visualisation within the UCSC and Ensembl genome browsers.  This allows users to place HipSci data in the context of external resources and annotations built in to these browsers.  This page describes how to attach the HipSci Track Hubs to the UCSC and Ensembl genome browsers and then how to configure and customise them.

##Accessing the Track Hubs
The Track Hubs can be accessed directly using the following links:

* [Ensembl](http://grch37.ensembl.org/TrackHub?url=http://ftp.hipsci.ebi.ac.uk/vol1/ftp/track_hub//hipsci_hub/hub.txt;species=Homo_sapiens;name=hipsci_hub;registry=1)

* [UCSC](http://genome.ucsc.edu/cgi-bin/hgHubConnect?db=hg19&hubUrl=http://ftp.hipsci.ebi.ac.uk/vol1/ftp/track_hub//hipsci_hub/hub.txt&hgHub_do_redirect=on&hgHubConnect.remakeTrackHub=on)

HipSci Track Hubs are also registered in the [Track Hub Registry](http://trackhubregistry.org/) to enable broad discovery and reuse.  From the [Track Hub Registry home page](http://trackhubregistry.org/) you can [search](http://trackhubregistry.org/search) for 'hipsci' to obtain information about the latest release of the HipSci Track Hub, this service also provides direct links to the UCSC and Ensembl genome browsers.

The Track Hub text files are hosted from our [FTP site](ftp://ftp.hipsci.ebi.ac.uk/vol1/ftp/TrackHub/hipsci_hub/).

##Track Hub configuration
By default, only a few tracks are visible upon initial loading of the Track Hub, with the remainder hidden from view. Both Ensembl and UCSC have powerful configuration interfaces to load different cell lines and data formats into the displayed view.  The Track Hubs are fully navigable with the ability to jump to a specific genomic location, the pages support zooming to change the amount of the chromosome in view as well as search functions to look for particular genomic features.

You can configure which cell lines and data types are available in the browser view by:


###[Ensembl](http://grch37.ensembl.org/TrackHub?url=http://ftp.hipsci.ebi.ac.uk/vol1/ftp/track_hub//hipsci_hub/hub.txt;species=Homo_sapiens;name=hipsci_hub;registry=1)
  * In the menu on the left side of the page click 'configure this page'.  This will show all of the customisable tracks.  The hipsci_hub tracks are shown here.
  * Each HipSci track can be turned 'off', on as 'normal' or as 'coverage only'.
  * The menu on the left can be used to jump to a cell line of interest.  
  * By clicking on any track or hitting the 'i' button you can find out more information about that track.
  * Once you have selected the tracks of interest click the tick icon on the top right hand corner of the pop up box, this will load the selected tracks into view.

More information on customising Ensembl Track hub views is available from their [help page](http://grch37.ensembl.org/info/index.html).


###[UCSC](http://genome.ucsc.edu/cgi-bin/hgHubConnect?db=hg19&hubUrl=http://ftp.hipsci.ebi.ac.uk/vol1/ftp/track_hub//hipsci_hub/hub.txt&hgHub_do_redirect=on&hgHubConnect.remakeTrackHub=on)
  * Scroll to the bottom of the page to see a series of drop down buttons for all of the tracks from the HipSci data.
  * Each of these can be changed to 'show' or 'hide' a particular track.
  * Any of the titles can be clicked on to find out more information about that track.  This gives greater customisation options for that track in terms of data density and display.
  * Click the refresh button located in the header bar of the 'hipsci_hub' section to reload the view with your changes.

More information on customising UCSC Track hub views is available from their [help page](http://genome.ucsc.edu/goldenPath/help/hgTracksHelp.html).

Please be aware that depending on how many tracks and data types have been selected, Track Hubs can take time to load and update due to the quantity of data that is being processed in order to display your view.
