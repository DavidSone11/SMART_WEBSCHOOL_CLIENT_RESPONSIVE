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

            }).state('home', {
                url: '/home',
                templateUrl: 'ng/directives/home/home.tmpl.html',
                controller: 'HomeController',
                resolve: {
                    loadExternalFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'dIApp',
                            files: [
                                'ng/directives/home/home.directive.js',
                                'ng/directives/home/home.controller.js',
                                'ng/directives/sidebar/sidebar.directive.js',
                                'ng/directives/header/header.directive.js'
                                

                            ]
                        });
                    }]
                }
            })
            .state('home.dashboard', {
                url: '/dashboard',
                templateUrl: 'ng/directives/dashboard/dashboard.tmpl.html',
                controller: 'DashboardController',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/dashboard/dashboard.controller.js',
                           

                        ]
                        );
                    }]
                }
            })
    });
}());