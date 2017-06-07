'use strict';

// Not sure what this is for, but I remember hearing that it would break if this wasn't included. Will test later :

// require('./scss/reset.scss')
// require('./scss/main.scss')

const angular = require('angular');
const cowsay = require('cowsay-browser');
const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log){
  $log.debug('#CowsayController');

  $log.log('check this out', this);

  this.title = 'There is no cow level fooool';
  this.history = [];

  cowsay.list((err, cows) => {
    this.cowfiles = cows;
    this.current = this.cowfiles[0];
  });

  this.update = function(input){
    $log.debug('#update');
    return cowsay.say({text: input || 'mooooo', f: this.current});
  };

  this.speak = function(input){
    $log.debug('#speak');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = function(){
    $log.debug('#undo');

    this.history.pop();
    let index = this.history.length - 1;
    this.spoken = this.history[index] || '';
  };
}

cowsayApp.controller('NavigationController', ['$log', NavigationController]);

function NavigationController($log){
  $log.debug('#NavigationController');

  this.routes = [
    {
      name: 'home',
      url: '/home',
    },
    {
      name: 'about',
      url: '/about',
    },
    {
      name: 'contact',
      url: '/contact',
    },
  ];
}
