---
layout: page
title: How can I access data programmatically?
permalink: /data/faq/api/
---

### API

HipSci has a json API which provides programmatic access to the project's data.
The API is built on Elasticsearch, and uses many of the options
described in the [Elasticsearch version 1.5 documentation](https://www.elastic.co/guide/en/elasticsearch/guide/1.x/search.html){:target="_blank"}.

### Endpoints h3

#### Information about a cell line: http://www.hipsci.org/lines/api/cellLine/:name

* E.g. GET [http://www.hipsci.org/lines/api/cellLine/HPSI0214i-wibj_2](http://www.hipsci.org/lines/api/cellLine/HPSI0214i-wibj_2)
* Returns information in json format
* The cellLine data structure is defined by [this mapping](https://github.com/EMBL-EBI-GCA/gca_hipsci_browser/blob/master/elasticsearch_settings/json/cellLine_mapping.json){:target="_blank"}.  See [this guide](https://www.elastic.co/guide/en/elasticsearch/guide/1.x/mapping-intro.html){:target="_blank"} for information on Elasticsearch mapping definitions

#### Information about a donor: http://www.hipsci.org/lines/api/donor/:name

* E.g GET [http://www.hipsci.org/lines/api/donor/HPSI-wibj](http://www.hipsci.org/lines/api/donor/HPSI-wibj)
* Returns information in json format
* The donor data structure is defined by [this mapping](https://github.com/EMBL-EBI-GCA/gca_hipsci_browser/blob/master/elasticsearch_settings/json/donor_mapping.json){:target="_blank"}.  See [this guide](https://www.elastic.co/guide/en/elasticsearch/guide/1.x/mapping-intro.html){:target="_blank"} for information on Elasticsearch mapping definitions

#### Search for cell lines: http://www.hipsci.org/lines/api/cellLine/_search

* This endpoint supports any search option described in the Elasticsearch documentation on [Full Body Search](https://www.elastic.co/guide/en/elasticsearch/guide/1.x/full-body-search.html)
* Returns information in json format
* E.g. Search for cell lines derived from fibroblasts: 

~~~~
POST http://www.hipsci.org/lines/api/cellLine/_search
'{
 "query": {
    "filtered": {
      "filter": {
        "term": {"sourceMaterial.cellType": "Fibroblast"}
      }
    }
  }
}'
~~~~

* E.g. Search for all cell lines and return the names of the first 100: 
~~~~
POST http://www.hipsci.org/lines/api/cellLine/_search
'{
  "size": 100,
  "_source": ["name"],
  "query": {"match_all": {}}
}'
~~~~


#### Search for donors: http://www.hipsci.org/lines/api/donor/_search

* This endpoint supports any search option described in the Elasticsearch documentation on [Full Body Search](https://www.elastic.co/guide/en/elasticsearch/guide/1.x/full-body-search.html)
* Returns information in json format
* E.g. Search for donors in the age range 20-24:

~~~~
POST http://www.hipsci.org/lines/api/donor/_search
'{
  "query": {
    "filtered": {
      "filter": {
        "term": {"age": "20-24"}
      }
    }
  }
}'
~~~~

* E.g. Search for all donors and return the names of the first 100: 

~~~~
POST http://www.hipsci.org/lines/api/donor/_search
'{
  "size": 100,
  "_source": ["name"],
  "query": {"match_all": {}}
}'
~~~~

#### Search for files: http://www.hipsci.org/lines/api/file/_search

* This is the endpoint for assay data files, including QC, genomics, proteomics, and phenotyping data.
* The file data structure is defined by [this mapping](https://github.com/EMBL-EBI-GCA/gca_hipsci_browser/blob/master/elasticsearch_settings/json/file_mapping.json){:target="_blank"}. See [this guide](https://www.elastic.co/guide/en/elasticsearch/guide/1.x/mapping-intro.html){:target="_blank"} for information on Elasticsearch mapping definitions
* This endpoint supports any search option described in the Elasticsearch documentation on [Full Body Search](https://www.elastic.co/guide/en/elasticsearch/guide/1.x/full-body-search.html)
* Returns information in json format
* E.g. Search for assay files from cell line HPSI0214i-wibj_2: 

~~~~
POST http://www.hipsci.org/lines/api/file/_search
'{
  "query": {
    "filtered": {
      "filter": {
        "term": {"samples.name": "HPSI0214i-wibj_2"}
      }
    }
  }
}'
~~~~
