

// put all in closure
(function(){

//module. store-products dependency is another module
var app = angular.module('gemStore');

// store is the controller and we will add properties to it
// and we will put our data in the products property
app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [ ];
    $http.get('/products.json').success(function(data){
        console.log(data);
        store.products = data;
    });

}]);







})(); // end closure
