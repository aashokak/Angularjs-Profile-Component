function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '',
    controller: 'ProfileController',
    controllerAs: '$ctrl',
    templateUrl: 'home/profile.html'
  });

};

export default ProfileConfig;