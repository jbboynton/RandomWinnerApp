/**
 * Randomizer controller definition file.
 */

'use strict';

module.exports = function($scope, $http, $uibModal) {

  var vm = this;
  vm.participants = [ ];

  $http.get('data/sales-and-marketing-typeform-survey-participants.json')
    .then(function(res) {
      $scope.participants = vm.participants = res.data;
  });

  vm.pickTheWinner = function() {
    var modalInstance = $uibModal.open({
      controller: 'ModalCtrl as vm',
      scope: $scope,
      templateUrl: 'app/views/winner.html'
    });
  };

};
