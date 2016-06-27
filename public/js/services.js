'use strict';

angular.module('myApp')

.service('Item', function($localStorage, $q) {
  this.addItem = (itemObj, type) => {
    itemObj.credit = itemObj.amount;
    itemObj.room = itemObj.room;
    itemObj.newBalance = $localStorage.balance + itemObj.credit;
    $localStorage.items.push(itemObj);
    return $q.resolve(itemObj);
  };
});
