angular.module('siteApp')
  .directive('siteFooter', function(){
    return {
      restrict: 'E',
      templateUrl: './app/scripts/shared/siteFooter/siteFooter.html'
    };
  });