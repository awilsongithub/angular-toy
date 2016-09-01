// create store-products module with no dependencies and it contains our directirves which
//  1. modularize our html by using templates
//  2. sometimes include controllers as well providing functionality related to that template part of the html interface
//  3. controllers may have alias's for calling them

(function(){

    var app = angular.module('store-products', [] );

    // return the template, placing it into the html directive element
    app.directive('productDescription', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    // return this template
    app.directive('productSpecs', function(){
        return {
            restrict: 'A',
            templateUrl: 'product-specs.html'
        };
    });

    // show review form template if show === true. button ng-click calls pass with value of true or false
    app.directive('reviewForm', function(){
        return {
            restrict: 'E',
            templateUrl: 'review-form.html',
            controller: function(){
                // property boolean, function to set boolean based on parameter passed, function to check value of property
                this.show = false;
                this.setShow = function(value){
                    this.show = value;
                };
                this.isShown = function(){
                    return this.show;
                };
            },
            controllerAs: 'form'
        };
    });

    // shows a particular part of product-panels.html depending on value of it's property "tab"
    // those parts are 1. description, 2. specs or 3. reviews
    // this directive has a template w panel tab navigation and directives or html for panel content plus controller setting and tracking active panel. ng-click on a tab calls setTab to set that tab number equal to the property tab.  Eeach panel uses ng-show to know if it should be showing by calling isSet to check itself against "tab".
    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){
                this.tab = 1;
                this.setTab = function(setTab){
                    this.tab = setTab;
                };
                this.isSet = function(isSet){
                    return this.tab === isSet;
                };
            },
            controllerAs: 'panel'
        };
    });

})();
