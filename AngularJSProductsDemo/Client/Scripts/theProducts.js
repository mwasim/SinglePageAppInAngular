(function () {
    var app = angular.module("theProducts", ["ngRoute"]);

    var config = function ($routeProvider) {
        $routeProvider
            .when("/list", { templateUrl: "client/views/list.html" })
            .when("/details/:id", { templateUrl: "client/views/details.html" })
            .otherwise({ redirectTo: "/list" });
    };

    app.config(config);

    //register constant value productApiUrl to use as a dependency in productService
    app.constant("productApiUrl", "/api/products/");

}());