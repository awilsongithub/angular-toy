// put all in closure
// (function(){})() is an IIFE: immediately invoked function expression used so it's only called 1x, code block executes immediately, and doesn't effect global scope.
(function(){

    //module. store-products dependency is another module
    // need empty array in definition even if no dependencies yet!
    var app = angular.module('gemStore', ['store-products']);

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

    //
    app.controller('ReviewController', function(){
        this.review = {};
        // how does submission pass gem object??
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {}; // clear form
        };
    });


})(); // end closure
