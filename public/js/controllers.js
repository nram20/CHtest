'use strict';

angular.module('myApp')
.controller('mainCtrl', function($scope, $localStorage, Item) {




  /////// INITIALIZE ////////
  $scope.type = 'credit';
  initialize();
  // if($localStorage.items.length) 
  updateTotals(0);
  ///////////////////////////

  $scope.reset = () => {
    $localStorage.$reset();
    initialize();
  }

  $scope.delete = ($index) => {
    $localStorage.items.splice($index,1);
    updateTotals()

  }



  $scope.addItem = (itemObj, type) => {
    Item.addItem(angular.copy(itemObj), angular.copy(type))
      .then(itemObj2 => {
        updateTotals(itemObj2.credit);
      })
    $scope.item = '';
  };

  function updateTotals(balanceChange) {
    $localStorage.balance += balanceChange;
    $scope.totalCredit = 0;
    $localStorage.items.forEach(item => {
      $scope.totalCredit += (item.credit);
    });
  }
  function initialize() {
    $scope.storage = $localStorage.$default({
      started: false,
      items: [],

    });
  }

});
