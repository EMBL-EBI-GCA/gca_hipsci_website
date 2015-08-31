'use strict';

var dependencies = [
    'ngRoute',
    'ngSanitize',
];

var app = angular.module('searchResults', dependencies);
app.controller('SearchCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
    $scope.searchPhrase = $location.search().q;
    $scope.hits = [];
    if ($scope.searchPhrase) {
        var postBody = {
            query: {
                match_phrase: {
                    content: $scope.searchPhrase
                }
            },
            highlight: {
                fields: {
                    content: {}
                }
            }
        }
        $http.post('/lines/api/sitemap/_search', postBody).then(
            function(response) {
                $scope.hits = response.data.hits.hits;
                console.log($scope.hits);
            }
        );
    }
}]);
