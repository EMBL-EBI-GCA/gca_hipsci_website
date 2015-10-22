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
        $http.post('/lines/api/sitemap/_search', postBody).then(
            function(response) {
                controller.siteHits = response.data.hits;
            }
        );
    }

    var linesSearch = function(q) {
        var postBody = {
            query: {
                multi_match: {
                    query: q,
                    fields: ['searchable.free', 'searchable.fixed^3'],
                    type: "most_fields",
                }
            }
        }
        $http.post('/lines/api/cellLine/_search', postBody).then(
            function(response) {
                controller.lineHits = response.data.hits;
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


app.directive('lineHits', function() {
    return {
        restrict: 'E',
        scope: 'false',
        template: 
  '<div class="row navigation">'
+ '<h3><span ng-bind="SearchCtrl.lineHits.total" class="nav-title"></span> matching cell line<span ng-if="SearchCtrl.lineHits.total > 1">s</span></h3>'
+ '<div ng-repeat="hit in SearchCtrl.lineHits.hits" class="col-md-4"><div class="nav-item">'
+ '<a ng-href="/lines/#/lines/{{hit._source.name}}"><p ng-bind="hit._source.name"></p>'
+ '</a></div></div>'
+ '<div class="col-md-12"><div class="nav-item"><a ng-href="/lines/#/lines?q={{SearchCtrl.searchPhrase}}"><p>Cell line search results in the lines and data browser</p></a></div></div>'
+ '</div>'
    };
});
