(function (app) {

    var productService = function ($http, productApiUrl) {
        var getById = function (id) {
            return $http.get(productApiUrl + id);
        };

        var getAll = function () {
            return $http.get(productApiUrl);
        };

        var update = function (product) {
            return $http.put(productApiUrl + product.Id, product);
        };

        var create = function (product) {
            return $http.post(productApiUrl, product);
        };

        var destroy = function (product) {
            return $http.delete(productApiUrl + product.Id);
        };

        return {
            getById: getById,
            getAll: getAll,
            create: create,
            update: update,
            delete: destroy
        };
    };

    app.factory("productService", productService);

}(angular.module("theProducts")));