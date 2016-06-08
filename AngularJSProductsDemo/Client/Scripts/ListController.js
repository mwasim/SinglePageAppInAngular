(function (app) {

    var ListController = function ($scope, productService) {

        productService.getAll()
            .success(function (data) {
                $scope.products = data;
            });

        $scope.delete = function (product) {
            productService.delete(product)
            .success(function () {
                removeProductById(product.Id);
            });
        };

        var removeProductById = function (id) {
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].Id == id) {
                    $scope.products.splice(i, 1);
                    break;
                }
            }
        };
    };

    app.controller("ListController", ListController);

}(angular.module("theProducts")));