angular.module('devmtnTravel')
.controller('packagesController', function($scope, mainSrv, $stateParams, $state){


$scope.test = "Packages";

$scope.travelData = mainSrv.travelInfo;




})
