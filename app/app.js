var app = angular.module('angularSeedApp', ['ngRoute']);

app.constant('usersURL',"https://jsonplaceholder.typicode.com/users");

app.factory('usersFactory', function(usersURL,$http) {
    
    return {
        getUsers : function () {
            return $http.get(usersURL);
        }
    };
    
});

app.config(function ($provide) {
    
    $provide.factory('usersFactory_Provide',function (usersURL,$http) {        
        return {
            getUsers : function () {
                return $http.get(usersURL);
            }
        };
        
    });
});

app.provider('users_Provider', function() {
    
    var _url = '';
    
    return {
        
        setUsersUrl : function(url) {
            _url = url;
        },
        
        $get : function ($http) {
            
            return {
                getUsers : function () {
                    return $http.get(_url);
                }
            };
            
        }
    };
    
});

app.config(function(users_ProviderProvider) {
    users_ProviderProvider.setUsersUrl("https://jsonplaceholder.typicode.com/users");
})

app.controller('ExampleController', function(users_Provider,$scope){
    
   $scope.data = {
       dataFromFactory : []
   }; 
    
   users_Provider.getUsers().then(function successHandler(response){
       $scope.data.dataFromFactory.push(response.data);
   }); 
    
});