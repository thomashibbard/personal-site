angular.module('siteApp')
  .directive('siteFooter', function(){
    return {
      restrict: 'E',
      templateUrl: './app/scripts/shared/siteFooter/siteFooter.html'
    };
  })
  .directive('siteHeader', function(){
    return {
      restrict: 'E',
      templateUrl: './app/scripts/shared/siteHeader/siteHeader.html'
    };
  })
  .directive('siteUberHeader', function(){
    return {
      restrict: 'E',
      templateUrl: './app/scripts/shared/siteUberHeader/siteUberHeader.html'
    };
  })  