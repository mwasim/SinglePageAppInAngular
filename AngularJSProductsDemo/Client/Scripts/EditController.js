(function (app) {

    // ReSharper disable once InconsistentNaming
    var EditController = function ($scope, productService) {

        $scope.isEditable = function () {
            return $scope.edit && $scope.edit.product;
        };

        $scope.cancel = function () {
            $scope.edit.product = null;
        };

        var updateProduct = function () {
            productService.update($scope.edit.product)
            .success(function () {
                angular.extend($scope.product, $scope.edit.product);
                $scope.edit.product = null;
            });
        };

        var createProduct = function () {
            productService.create($scope.edit.product)
            .success(function (product) {
                $scope.products.push(product);
                $scope.edit.product = null;
            });
        };

        $scope.save = function () {
            console.log($scope.product);
            if ($scope.product && $scope.product.Id) {
                updateProduct();
            } else {
                createProduct();
            }
        };

    };

    app.controller("EditController", EditController);

}(angular.module("theProducts")));