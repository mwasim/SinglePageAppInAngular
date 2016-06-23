(function (app) {

    var ListController = function ($scope, productService) {

        productService.getAll()
            .success(function (data) {
                $scope.products = data;
            });

        $scope.create = function () {
            $scope.edit = {
                product: {
                    Name: "",
                    Description: "",
                    //Price: 0
                }
            };
        };

        var removeProductById = function (id) {
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].Id == id) {
                    $scope.products.splice(i, 1);
                    break;
                }
            }
        };

        $scope.delete = function (product) {
            productService.delete(product)
            .success(function () {
                removeProductById(product.Id);
            });
        };

    };

    app.controller("ListController", ListController);

}(angular.module("theProducts")));