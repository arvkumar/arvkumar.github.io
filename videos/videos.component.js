// Register the `publications` component on the `publications` module,
angular.
module('videos').
component('videos', {
    templateUrl: 'videos/videos.template.html',
    controller: ['$http',
        function VideosController($http) {
            var self = this;
            self.orderProp = '-year';

            $http.get('videos/videos.json').then(function(response) {
                self.videos = response.data;
            });

        }
    ]

});
