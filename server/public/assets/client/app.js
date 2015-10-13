/**
 * Created by JacobSchoolmeesters on 10/13/15.
 */
console.log('hello world');
var app = angular.module('tuesdayApp', ['ngRoute']);

app.controller('CompanyController', ['$scope', '$http', function($scope, $http){

    $scope.non_profit = false;
    $scope.ceo = {felon: false};
    $scope.searchValue = '';
    $scope.searchedMarketCap = '';


    $scope.sendData = function(){

        var dataToSend = {
            name: $scope.name,
            industry: $scope.industry,
            mascot: $scope.mascot,
            employees: $scope.employees,
            date_founded: $scope.date_founded,
            non_profit: $scope.non_profit,
            market_cap: $scope.market_cap,
            ceo: {
                name: $scope.ceo.name,
                since: $scope.ceo.since,
                salary: $scope.ceo.salary,
                felon: $scope.ceo.felon
            }



        };

    $http.post('/company/add', dataToSend).then(function(response){
        console.log('Success returned from server');
    });


    console.log('the data: ', dataToSend)
    };

    $scope.getData = function(){
        console.log('getting data');
        $http.get('/company/get').then(function(response){
            console.log('wheres the response');
            console.log(response);
            $scope.companies = response.data;

        });
    };

    $scope.searchCompanies = function(){
        console.log($scope.searchValue);
        $http.get('/company/findByName/' + $scope.searchValue).then(function(response){
            console.log(response);
            $scope.searchedMarketCap = response.data[0].market_cap;
        });
    }


}]);

app.config(function($routeProvider, $locationProvider){
   $routeProvider
       .when('/',{
        templateUrl:'views/home.html',
        controller: 'MainController'
    })
       .when('/about',{
           templateUrl:'views/about.html',
           controller: 'AboutController'
       })
       .when('/contact',{
           templateUrl:'views/contact.html',
           controller: 'ContactController'
       });
    //this will assume a modern browser but will rollback if not present
    $locationProvider.html5Mode(true);
});
//
//app.controller('MainController', ['$scope', '$http', function($scope, $http) {
//
//    $scope.message = 'Welcome to INTERNETZ';
////    Downloaded angular-route for this controller!!
//
//}]);
//
//app.controller('AboutController', ['$scope', '$http', function($scope, $http) {
//
//    $scope.message = 'This is abouttttt';
////    Downloaded angular-route for this controller!!
//
//}]);
//
//app.controller('ContactController', ['$scope', '$http', function($scope, $http) {
//
//    $scope.message = 'CONtactz!';
////    Downloaded angular-route for this controller!!
//
//}]);