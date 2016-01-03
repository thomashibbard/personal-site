(function() {
  'use strict';

  angular
    .module('personalSite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
