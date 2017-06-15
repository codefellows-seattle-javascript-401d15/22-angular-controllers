'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');
const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController])

function CowsayController($log) {
  $log.debug('#CowsayController');

  $log.log('check this out ', this);

  this.title = 'Welcome to cowville'
}
