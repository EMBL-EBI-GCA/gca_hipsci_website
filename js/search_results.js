'use strict';

var dependencies = [
    'ngRoute',
    'ngSanitize',
];

var app = angular.module('searchResults', dependencies);


app.controller('SearchCtrl', ['$location', '$http', function($location, $http) {
    var controller = this
    controller.searchPhrase = $location.search().q;
    controller.hits = [];
    if (controller.searchPhrase) {
        var postBody = {
            _source: ['url', 'title'],
            query: {
                match_phrase: {
                    content: controller.searchPhrase
                }
            },
            highlight: {
                fields: {
                    content: {index_options: "offsets"}
                }
            }
        }
        $http.post('/lines/api/sitemap/_search', postBody).then(
            function(response) {
                controller.hits = response.data.hits.hits;
            }
        );
    }
}]);
