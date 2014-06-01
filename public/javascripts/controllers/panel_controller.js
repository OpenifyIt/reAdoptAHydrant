// Generated by CoffeeScript 1.6.3
goog.provide('reAdoptAHydrant.controllers.Panel');

reAdoptAHydrant.controllers.Panel = function($scope, UserService, $location, $cookies) {
  var _updateAdoptedHydrantText;
  $scope.user = null;
  $scope.adoptedHydrantsText = '';
  $scope.language = $cookies.lang;
  UserService.getCurrentUser(function(err, user) {
    return $scope.user = user;
  });
  $scope.$watch('user', function() {
    if ($scope.user) {
      return _updateAdoptedHydrantText($scope.user.adoptions.length);
    }
  });
  _updateAdoptedHydrantText = function(adoptionsCount) {
    var i18nOptions;
    i18nOptions = {
      count: adoptionsCount,
      context: adoptionsCount === 0 ? 'zero' : 'many'
    };
    return $scope.adoptedHydrantsText = window.$.t('adoptedHydrants', i18nOptions);
  };
  return $scope.$on('adoption', function(eventArg, hydrant) {
    $scope.user.adoptions.push(hydrant);
    return _updateAdoptedHydrantText($scope.user.adoptions.length);
  });
};
