// Register the `publications` component on the `publications` module,
angular.
module('blog').
component('blog', {
    templateUrl: 'blog/blog.template.html',
    controller: ['$http',
        function PublicationsController($http) {
            var self = this;
            self.orderProp = '-date';

            $http.get('blog/blog.json').then(function(response) {
                self.publications = response.data;
            });

        }
    ]

});
