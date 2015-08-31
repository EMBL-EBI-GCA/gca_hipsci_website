'use strict';

var dependencies = [
    'ngRoute',
    'ngSanitize',
];

var app = angular.module('searchResults', dependencies);

var template = '<h2 class="post-title" ng-bind="SearchCtrol.searchPhrase"></h2>'
 +' <div ng-repeat="hit in SearchCtrl.hits" class="announcements">'
       +' <h4 class="post-title"><a ng-href="hit._source.url" ng-bind="hit._source.title"></a></h4>'
      +' <p ng-repeat="highlight in hit.highlight.content" ng-include="highlight"></p>'
 +' </div>';

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        template: template,
        controller: 'SearchCtrl',
        controllerAs: 'SearchCtrl'
    }).otherwise({redirectTo: '/'});
}]);


app.controller('SearchCtrl', ['$location', '$http', function($location, $http) {
    var controller = this
    controller.searchPhrase = $location.search().q;
    controller.hits = [];
    if (controller.searchPhrase) {
        var postBody = {
            query: {
                match_phrase: {
                    content: controller.searchPhrase
                }
            },
            highlight: {
                fields: {
                    content: {}
                }
            }
        }
        $http.post('/lines/api/sitemap/_search', postBody).success(
            function(response) {
                controller.hits = response.data.hits.hits;
            }
        );
    }
}]);
