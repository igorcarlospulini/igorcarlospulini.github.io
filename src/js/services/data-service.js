angular.module('RDash').service('DataService', [DataService])

function DataService() {
  var obj = {};

  return {
    getItem: function () {
      return obj;
    },
    setItem: function(value) {
      obj = value;
    }
  };
}
