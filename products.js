// create store-products module with no dependencies and it contains our directirves which
//  1. modularize our html by using templates
//  2. sometimes include controllers as well providing functionality related to that template part of the html interface
//  3. controllers may have alias's for calling them

(function(){

    var app = angular.module('store-products', [] );

    app.directive('productDescription', function(){
        return {

        };
    });

})();
