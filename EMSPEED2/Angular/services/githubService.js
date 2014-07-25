(function () {

    var githubService = function ($http, $log) {

        var theVal = null;
        var setIt = function (it) {
            theVal = it;
        };
        var getIt = function () {
            return theVal;
        };

        var logIt = function (username) {
            $log.info('logIt ' + username);
        };

        var getUser = function (username) {
            return $http.get('https://api.github.com/users/' + username)
              .then(function (response) {
                  return response.data;
              });
        };

        var getRepos = function (user) {
            return $http.get(user.repos_url)
              .then(function (response) {
                  return response.data;
              });

            //var promise = $http.get(user.repos_url);
            //promise.then(function (response) {
            //      return response.data;
            //});


        };

        return {
            setIt: setIt,
            getIt: getIt,
            logIt: logIt,
            getUser: getUser,
            getRepos: getRepos
        };
    };

    var module = angular.module('githubViewer');
    module.factory("githubService", githubService)

}()); //IIFE