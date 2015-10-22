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
  '<div class="row">'
+ '<div class="col-md-12"><h3 class="nav-title"><span ng-bind="SearchCtrl.lineHits.total + (SearchCtrl.lineHits.total > 1 ? \' matching cell lines\' : \' matching cell line\')"></span> in the <a ng-href="/lines/#/lines?q={{SearchCtrl.searchPhrase}}">lines and data browser</a></h3></div>'
+ '<div ng-repeat="hit in SearchCtrl.lineHits.hits" class="col-md-4 col-sm-4 col-xs-4"><div class="nav-item">'
+ '<a ng-href="/lines/#/lines/{{hit._source.name}}"><p ng-bind="hit._source.name"></p>'
+ '</a></div></div></div>'
    };
});
