use strict;

var dependencies = [
    'ngRoute',
    'ngSanitize',
];

var app = angular.module('searchResults', dependencies);
app.controller('SearchCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $scope.searchPhrase = $routeParams.q;
    $scope.hits = [];
    if ($scope.searchPhrase) {
        var postBody = {
            query: {
                match_phrase: {
                    content: $scope.searchPhrase;
                }
            },
            highlight: {
                fields: {
                    content: {}
                }
            }
        }
        $http.post('/lines/api/sitemap/_search', {query}).then(
            function(response) {
                $scope.hits = response.data.hits.hits;
            }
        );
    }
}]);
