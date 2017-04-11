---
layout: page
title: How do I find and download managed access data files?
permalink: /data/faq/find-download-managed-access-files/
---

**Download managed-access data**

HipSci’s managed access data is stored at the EGA. You must have completed a [Data Access Agreement](documents/hipsci-daa.pdf) via the [eDAM page](https://www.sanger.ac.uk/legal/DAA/MasterController) and been sent aproval for access to the data you applied for. If you have not done this step, please refer to our video or document titled "Applying for managed access data".

Hipsci data is setup and structured in the following way within EGA. Understanding the structure will help you to hone in on the data you seek.

<img src="/img/datafaq6.png" class="faqimage">

Data access is provided at the cohort level. A cohort comprises all donors assigned to that cohort, e.g. 'Monogenic diabetes' or 'Healthy normals'. A successful data access application will grant you access to all data for your chosen cohort.

For each cohort, we distribute data from multiple assays e.g. RNA seq, WES, WGS.  Each different assay within the cohort is given a different study ID. The study IDs start with the letters EGAS; for example [EGAS00001000866](https://ega-archive.org/studies/EGAS00001000866).

Within each study ID, there are multiple datasets corresponding to different release dates. Each dataset has an ID that starts with the letters EGAD; for example [EGAD00010001147](https://ega-archive.org/datasets/EGAD00010001147). The data sets are informatively labelled to help you identify the cohort, the assay and release date. For example, "HipSci - Healthy Normals - Genotyping Array - September 2016".

Each dataset contains files of multiple types. For example, a [exome-seq](/assay/rnaseq) dataset will contain raw sequencing, aligned sequence, and variant call files.

When new data is released for an assay, we create a new dataset to include all of the latest data files, including both the new and old data files. The new dataset therefore supercedes the old dataset, and we recommend researchers always download the newest dataset for a particular assay and disease cohort. This is why we include the release date in the dataset ID. As access is given at the cohort level, you will have access to the data in any new releases too.

The HipSci website provides a [EGA datasets](/lines/#/datasets) table, which shows the most recent dataset IDs for each assay under each cohort.  Click on a dataset ID and you will be offered three options:

<img src="/img/datafaq10.png" class="faqimage">

Option #1, Looking for data access if for anyone who has not yet applied for access to the data via [Electronic Data Access Management system (eDAM)](https://www.sanger.ac.uk/legal/DAA/MasterController).

Option #2, “Want to download the data?”, if your application for data has been successful, and you are now ready to download the data. The link will take you to the dataset on the EGA website.  Log in to the website using your institutional email address and password.

The EGA dataset website page has a “Downloads” section.  If you have been granted access to the cohort, and if you are logged in correctly, then you will see two options:

* **Download metadata** - this option will give you information about the cell lines and files; this same information is also searchable in the HipSci cell lines browser.
* **“Download data files** - this is the button to click to start downloading the QC and characterization data files to your computer. We recommend users read the EGA’s [download quick guide](https://ega-archive.org/downloader-quickguide) to learn about the EGA download client.

Option #3, “What is in the dataset?” is helpful for users who have not yet applied for data access, but who want to know exactly which data files belong in a dataset.
