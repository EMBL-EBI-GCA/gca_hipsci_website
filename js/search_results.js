'use strict';

var dependencies = [
    'ngRoute',
    'ngSanitize',
];

var app = angular.module('searchResults', dependencies);

app.controller('SearchCtrl', ['$location', '$http', '$scope', function($location, $http, $scope) {
    var controller = this
    controller.siteHits = [];
    controller.lineHits = [];

    var siteSearch = function(q) {
        var postBody = {
            _source: ['url', 'title'],
            query: {
                match_phrase: {
                    content: q
                }
            },
            highlight: {
                fields: {
                    content: {}
                },
                pre_tags: ['<em><strong>'], post_tags: ['</strong></em>']
            }
        }
        $http.post('http://test.hipsci.org/lines/api/sitemap/_search', postBody).then(
            function(response) {
                controller.siteHits = response.data.hits.hits;
            }
        );
    }

    var linesSearch = function(q) {
        var postBody = {
            _source: ['name'],
            query: {
                multi_match: {
                    query: q,
                    fields: ['searchable.free', 'searchable.fixed^3'],
                    type: "most_fields",
                }
            }
        }
        $http.post('http://test.hipsci.org/lines/api/cellLine/_search', postBody).then(
            function(response) {
                controller.lineHits = response.data.hits.hits;
            }
        );
    }

    var search = function() {
        controller.searchPhrase = $location.search().q;
        if (controller.searchPhrase) {
            siteSearch(controller.searchPhrase)
            linesSearch(controller.searchPhrase)
        }
        else {
            controller.siteHits = [];
            controller.lineHits = [];
        }
    };

    $scope.$on('$locationChangeStart', search);
    search();
}]);
