angular.module('siteApp')
  .controller('siteFooterCtrl', function($scope){
    $scope.selectedID;
    $scope.toggleSelected = function(id){
      $scope.selectedID = id;
    };
  });