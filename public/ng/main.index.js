var r = (function mainFun() {

    'use strict';
    var app = angular.module('sbAdminApp', [
        'ui.router',
        'oc.lazyLoad',
        'ngAnimate',
        'angular-loading-bar',
        "ngSanitize",
        "flow"
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
                                'ng/directives/l_sidebar/l_sidebar.directive.js',
                                'ng/directives/r_sidebar/r_sidebar.directive.js',
                                'ng/directives/header/header.directive.js',
                                'ng/directives/footer/footer.directive.js'


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
            }).state('home.user', {
                url: '/user',
                template: '<user></user>',
                controller: 'UserController',
                resolve: {
                    loadAllMyDirectives: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/User/User.controller.js',
                            'ng/directives/User/User.directive.js',

                        ]
                        );
                    }],

                }
            }).state('home.upload', {
                url: '/upload',
                template: '<upload></upload>',
                controller: 'UploadController',
                resolve: {
                    loadAllMyDirectives: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/Upload/Upload.controller.js',
                            'ng/directives/Upload/Upload.directive.js',

                        ]
                        );
                    }],

                }
            })
    });
}());