app.controller("profileController", function($scope,$log){

    $scope.currentProfilePicture = 1;

    $scope.changePicture = function(){
        var randomNumber = Math.floor((Math.random() * 4) + 1);
        while(randomNumber == 5 || randomNumber == $scope.currentProfilePicture){
            randomNumber = Math.floor((Math.random() * 4) + 1);
        }
        $scope.currentProfilePicture = randomNumber
    }

});