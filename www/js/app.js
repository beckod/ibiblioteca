(function(){
var app  = angular.module('starter', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('main', {

    url: '/main',
    templateUrl: 'templates/main.html '

  });

  $stateProvider.state('author', {

    url: '/author',
    templateUrl: 'templates/author.html '

  });

  $stateProvider.state('curri', {

    url: '/curri',
    templateUrl: 'templates/curriculum.html '

  });
  
    // Página por defecto
    $urlRouterProvider.otherwise('/main');
})

app.controller('mainCtrl', function($scope) {

});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

}());