app.controller("profileController", function($scope,$log){
    var imageArray = [
        'https://s3-us-west-2.amazonaws.com/neshsolutionswebpage/profile_picture_1.jpg',
        'https://s3-us-west-2.amazonaws.com/neshsolutionswebpage/profile_picture_2.jpg',
        'https://s3-us-west-2.amazonaws.com/neshsolutionswebpage/profile_picture_3.jpg'
    ];
    $scope.profileImagePath = imageArray[0];

    $scope.changePicture = function(picIndex){
        if(picIndex > (imageArray.length -1)){
            $log.error("The index is higher than the size of the array, index:" + picIndex + " maximum index of array: " + (imageArray.length-1));
        }
        else{
            $scope.profileImagePath = imageArray[picIndex];
        }
    }
});