// Register the `publications` component on the `publications` module,
angular.
module('video').
component('video', {
    templateUrl: 'video/video.template.html',
    controller: ['$http',
        function VideoController($http) {
            var self = this;
            self.orderProp = '-year';

            $http.get('video/video.json').then(function(response) {
                self.video = response.data;
            });

        }
    ]

});
