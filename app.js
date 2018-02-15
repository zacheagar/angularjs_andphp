(function() {
var app = angular.module('funwithcountries', []);

app.factory('countryService',function($http){
    var baseUrl = 'phpservices/';
    return {
    getCountries : function(){
        return $http.get(baseUrl +"getCountries.php");
    }
    };
})

app.controller('CountryController', function(countryService){
    var that = this;

    countryService.getCountries()
    .success(function(data){
      that.countries = data;
    });
    this.newState = "";
    this.addStateto = function(){
        if(!country.states){
            country.states = [];
        } country.states.push({name: this.newState});
        this.newState = "";
    }

     });
   })  
();
 
   
