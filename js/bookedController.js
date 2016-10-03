angular.module('devmtnTravel')
.controller('bookedController', function($scope, mainSrv, $stateParams, $state){


$scope.travelData = mainSrv.travelInfo;

for(var i = 0; i < $scope.travelData.length; i++){
  if($state.params.id == $scope.travelData[i].id){
    $scope.selectedDest = $scope.travelData[i];
  }
}


})
