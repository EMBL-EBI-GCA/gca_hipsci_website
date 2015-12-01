---
layout: data
title: Data Navigation
nav_description: Many different ways to explore and download HipSci's assay data
order: 4
redirect_from:
    - /data-navigation
tags:
    - data
priority: 85
nav: true
---

The [Lines and Data]({{site.baseurl}}/lines/) page gives an overview of
HipSci cell lines and assay data that are publicly available. This page
provides links to HipSci data on the project ftp site, in the EGA archive, and
in the BioSamples archive.

Open-access data are available on the HipSci ftp site:
[ftp://ftp.hipsci.ebi.ac.uk/vol1/ftp/](ftp://ftp.hipsci.ebi.ac.uk/vol1/ftp/).

Managed-access genomic data are available from the EGA archive. For access to
these data, users must read the Data Access Agreement document ([pdf]({{site.baseurl}}/documents/HipSci_Normals_DAA_v3.2_form.pdf), [doc]({{site.baseurl}}/documents/HipSci_Normals_DAA_v3.2_form.doc)) and
register for access via WTSI's [Electronic Data Access Mechanism](https://www.sanger.ac.uk/legal/DAA/MasterController).

HipSci cell lines and donors are registered in BioSamples in a [HipSci group](http://www.ebi.ac.uk/biosamples/group/SAMEG120702).

###Downloading files

Files on the HipSci ftp site are also available for download via standard FTP
or HTTP protcols. It is also available via the faster UDP based
[Aspera protocols](http://asperasoft.com/software/transfer-clients/connect-web-browser-plug-in/).
To use this service you need to download the Aspera connect
software. This provides both a firefox plug in for downloading data and a bulk
download client called ascp.

An example command line for ascp looks like:

``ascp -i bin/aspera/etc/asperaweb_id_dsa.putty -T -Q -l 100M -L- --user=fasp-hip
fasp.hipsci.ebi.ac.uk:/vol1/ftp/current.tree ./ ``

The argument to -i may be different depending on the location of the default
key file. This command should not ask you for a password. These files are
freely accessible but you do need to give ascp the ssh key to complete the
command.

###Downloading files with Globus online

The HipSci FTP site is available as an endpoint in the [Globus Online](https://www.globus.org/) system.
In order to access the data you need to sign up for an account with Globus via
their signup page. You must also install the [Globus Connect Personal software](https://support.globus.org/entries/24044351)
and setup a personal endpoint to download the data too.

HipSci data are available from the end point ebi#public, which is one of several end points hosted by EMBL-EBI.

When you have setup your personal end point you should be able to start a
transfer using their web front end.

![Screen shot of HipSci globus file transfer]({{site.baseurl}}/img/globus_screen_shot.png)
