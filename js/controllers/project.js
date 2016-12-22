app.controller('projectController', function($scope,$http,$log) {

    $scope.current_tab_name = "";
    $scope.selectedIndex = 0;
    $scope.currentProjectSource = [{
        id: 0,
        source: "https://s3-us-west-2.amazonaws.com/neshsolutionswebpage/profile_picture_3.jpg",
        type: "image"
    }];
    $scope.sources = [];
    $scope.tabs = [];

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    var setCurrentSource = function (projectIndex) {
        for (var i = 0; i < $scope.sources.length; i++) {
            var obj = $scope.sources[i];
            if (obj.project_id == projectIndex) {
                $log.log('found the id');
                $scope.currentProjectSource = obj.sources;
                $log.log(obj.sources)
            }
        }
    };

    $http.get('resources/projects.json').success(function (response) {
        $scope.tabs = response;
        $scope.current_tab_name = response[$scope.selectedIndex].title;
    });
    $http.get('resources/project_sources.json').success(function (response) {
        $scope.sources = response;
        setCurrentSource($scope.selectedIndex);
    });

    $scope.$watch('selectedIndex', function (current, old) {
        if (current != old) {
            $scope.current_tab_name = $scope.tabs[current].title;
            setCurrentSource(current);
        }
    });

    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: '//unsplash.it/' + newWidth + '/300',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
        });
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
});