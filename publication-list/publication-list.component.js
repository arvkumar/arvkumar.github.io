// Register the `publicationList` component on the `publicationList` module,
angular.
module('publicationList').
component('publicationList', {
    templateUrl: 'publication-list/publication-list.template.html',
    controller: ['$http',
        function PublicationListController($http) {
            var self = this;
            self.orderProp = '-year';

            $http.get('publications/publications.json').then(function(response) {
                self.publications = response.data;
            });

        }
    ]

});
