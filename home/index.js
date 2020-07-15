import angular from 'angular';

// Create the module where our functionality can attach to
let homeModule = angular.module('home', []);

// Include our UI-Router config settings
import ProfileConfig from './profile.config';
homeModule.config(ProfileConfig);

// Controllers
import ProfileController from './profile.controller';
homeModule.controller('ProfileController', ProfileController);

export default homeModule;