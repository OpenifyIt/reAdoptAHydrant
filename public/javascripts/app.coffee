goog.provide 'reAdoptAHydrant.Application'
goog.require 'reAdoptAHydrant.services.UserService'
goog.require 'reAdoptAHydrant.services.HydrantService'
goog.require 'reAdoptAHydrant.controllers.Panel'
goog.require 'reAdoptAHydrant.controllers.Map'
reAdoptAHydrant.Application = () ->

reAdoptAHydrant.Application::start = () ->
    app = angular.module('reAdoptAHydrant', [])
    app.factory 'UserService', ['$http', reAdoptAHydrant.services.UserService]
    app.factory 'HydrantService', ['$rootScope', '$http', reAdoptAHydrant.services.HydrantService]
    app.controller 'panelCtrl', ['$scope', 'UserService', '$location', 'HydrantService', reAdoptAHydrant.controllers.Panel]
    app.controller 'mapCtrl', ['$scope', 'HydrantService', 'UserService', reAdoptAHydrant.controllers.Map]

goog.exportSymbol 'reAdoptAHydrant', reAdoptAHydrant
goog.exportSymbol 'reAdoptAHydrant.Application', reAdoptAHydrant.Application
goog.exportProperty reAdoptAHydrant.Application, 'start', reAdoptAHydrant.Application::start