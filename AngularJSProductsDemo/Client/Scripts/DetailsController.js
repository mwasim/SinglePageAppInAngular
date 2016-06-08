(function (app) {

    var DetailsController = function ($scope, productService, $routeParams) {

        var id = $routeParams.id;

        productService.get(id)
            .success(function (data) {
                $scope.product = data;
            });
    };

    app.controller("DetailsController", DetailsController);

}(angular.module("theProducts")));