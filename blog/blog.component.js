// Register the `publications` component on the `publications` module,
angular.
module('blog').
component('blog', {
    templateUrl: 'blog/blog.template.html',
    controller: ['$http',
        function BlogController($http) {
            var self = this;
            self.orderProp = '-year';

            $http.get('blog/blog.json').then(function(response) {
                self.blog = response.data;
            });

        }
    ]

});
