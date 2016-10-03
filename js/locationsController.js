angular.module('devmtnTravel')
.controller('locationsController', function($scope, mainSrv, $stateParams){

$scope.test = "Locations";

$scope.travelData = mainSrv.travelInfo;
console.log($scope.travelData)



})
