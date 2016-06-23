(function (app) {

    // ReSharper disable once InconsistentNaming
    var DetailsController = function ($scope, productService, $routeParams) {

        var id = $routeParams.id;

        productService.getById(id)
            .success(function (data) {
                $scope.product = data;
            });

        $scope.edit = function () {
            $scope.edit.product = angular.copy($scope.product);
        };
    };

    app.controller("DetailsController", DetailsController);

}(angular.module("theProducts")));