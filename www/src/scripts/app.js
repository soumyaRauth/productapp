(function () {
    "use strict";

    var app = angular.module("prototype", [
        "ui.router",
        "ui.bootstrap"
    ]);

    app.config([
        "$stateProvider",
        "$urlRouterProvider",
        "$locationProvider",

        function ($stateProvider, $urlRouterProvider, $locationProvider) {


            $urlRouterProvider.otherwise("/");
            // $locationProvider.html5Mode(true);

            $stateProvider
                .state("landing", {
                    url: "/",
                    templateUrl: "views/landing.html"
                })
                .state("main", {
                    url: "/main",
                    templateUrl: "views/main.html"
                })
                .state("list", {
                    url: "/list",
                    templateUrl: "views/list.html"
                })
                .state("single", {
                    url: "/single",
                    templateUrl: "views/single.html"
                })
                .state("about", {
                    url: "/about",
                    templateUrl: "views/page.html"
                })
                .state("aboutex", {
                    url: "/aboutex",
                    templateUrl: "views/nextpage.html"
                })
                .state("contact", {
                    url: "/contact",
                    templateUrl: "views/contact.html"
                })
                .state("delivery", {
                    url: "/delivery",
                    templateUrl: "views/delivery.html"
                })
                .state("page-1", {
                    url: "/page-1",
                    templateUrl: "views/page-1.html"
                })
                .state("page-2", {
                    url: "/page-2",
                    templateUrl: "views/page-2.html"
                })
                .state("page-3", {
                    url: "/page-3",
                    templateUrl: "views/page-3.html"
                })
                ;
        }]);

    app.run(["$rootScope", function ($rootScope) {
        $rootScope.showMenu = function () {
            $rootScope.menuShown = true;
        }
        $rootScope.hideMenu = function () {
            $rootScope.menuShown = false;
        }
        $rootScope.toggleMenu = function () {
            $rootScope.menuShown = !$rootScope.menuShown;
        }

        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
            $rootScope.menuShown = false;
        });
    }]);
})();