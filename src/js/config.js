function Config ($urlRouterProvider, $stateProvider) {
  // set path to defualt web page
  $urlRouterProvider.otherwise('/');

  // set state of app & routes
  $stateProvider
    // the base template
    .state('root', {
      abstract: true,
      templateUrl: 'templates/template.tpl.html',
    })
  ;
}

// inject dependencies into our controller/config etc
Config.$inject = ['$urlRouterProvider', '$stateProvider'];
export { Config };
