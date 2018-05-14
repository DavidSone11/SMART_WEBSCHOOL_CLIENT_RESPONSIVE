var r = (function mainFun() {

    'use strict';
    var app = angular.module('sbAdminApp', [
        'ui.router',
        'oc.lazyLoad',
        'ngAnimate',
        'angular-loading-bar',
        "ngSanitize"
    ]);

    var initInjector = angular.injector(['ng']);
    var $http = initInjector.get('$http');


    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login></login>',
                controller: 'LoginController',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/login/login.directive.js',
                            'ng/directives/login/login.controller.js',
                            

                        ]
                        );
                    }]
                }

            })
    });
}());