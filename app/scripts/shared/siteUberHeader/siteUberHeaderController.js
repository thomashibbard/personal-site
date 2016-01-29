angular.module('siteApp')
  .controller('siteUberHeaderCtrl', function($scope){
    $scope.selectedID;
    $scope.toggleSelected = function(id){
      $scope.selectedID = id;
    };
  });