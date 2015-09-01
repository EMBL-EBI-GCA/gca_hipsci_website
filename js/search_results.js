'use strict';

var dependencies = [
    'ngRoute',
    'ngSanitize',
];

var app = angular.module('searchResults', dependencies);

app.controller('SearchCtrl', ['$location', '$http', '$scope', function($location, $http, $scope) {
    var controller = this
    controller.hits = [];

    var search = function() {
        controller.searchPhrase = $location.search().q;
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
                        content: {}
                    },
                    pre_tags: ['<em><strong>'], post_tags: ['</strong></em>']
                }
            }
            $http.post('/lines/api/sitemap/_search', postBody).then(
                function(response) {
                    controller.hits = response.data.hits.hits;
                    for (var i=0; i<controller.hits.length; i++) {
                        controller.hits[i]._source.title = decodeURIComponent(escape(controller.hits[i]._source.title));
                    }
                }
            );
        }
    };

    $scope.$on('$locationChangeStart', search);
    search();
}]);
