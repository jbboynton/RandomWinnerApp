/**
 * Controller definition file for creating and editing customers.
 */

'use strict';

module.exports = function($scope, $uibModalInstance) {

  var vm = this;

  /* Dismiss the modal */
  vm.dismiss = function() {
    $uibModalInstance.dismiss();
  };




  vm.theWinner =
      $scope.participants[Math.floor((Math.random() *
      $scope.participants.length) + 1)];

};
