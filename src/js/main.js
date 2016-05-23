// Import angular & ui-router
import angular from 'angular';
import 'angular-ui-router';

console.log(angular);

// controllers

// Config
import config from './config';


angular
 .module('app', ['ui.router'])
 // .config(config)
;
