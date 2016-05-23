// Import angular & ui-router
import angular from 'angular';
import 'angular-ui-router';

console.log(angular);

// controllers
import { AddController } from './controllers/add.controller';
import { ListController } from './controllers/list.controller';

// Config
import {Config} from './config';

angular
 .module('app', ['ui.router'])
 .config(Config)
;
