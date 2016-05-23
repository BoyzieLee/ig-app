function Config ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templateUrl.tpl.html',
    })

}

Config.$inject = ['$urlRouterProvider', '$stateProvider'];
export { Config };
