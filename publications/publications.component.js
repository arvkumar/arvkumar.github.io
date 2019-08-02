// Register the `publications` component on the `publications` module,
angular.
module('publications').
component('publications', {
    templateUrl: 'publications/publications.template.html',
    controller: ['$http',
        function PublicationsController($http) {
            var self = this;
            self.orderProp = '-year';

            $http.get('publications/publications.json').then(function(response) {
                self.publications = response.data;
            });

        }
    ]

});
