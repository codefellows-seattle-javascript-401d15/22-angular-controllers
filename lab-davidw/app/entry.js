'use strict';

// require('./scss/reset.scss');
// require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.degub('#CowsayController');

  $log.log('check this out', this);

  this.title = 'Welcome to Meowville';
  this.history = [];

  cowsay.list((err, cows) => {
    this.cowfiles = cows;
    this.current - this.cowfiles[0];
  });

  this.update = function(input) {
    $log.debug('#Update');
    return cowsay.say({ text: input || 'rawr', f: this.current });
  };

  this.speak = function(input) {
    $log.debug('#Speak');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = function() {
    $log.debug('#Undo');
    let temp = this.history.pop();
    this.spoken = temp || '';
  };
}

cowsayApp.controller('NavigationController');
