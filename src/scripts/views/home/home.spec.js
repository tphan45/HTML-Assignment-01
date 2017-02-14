describe('home view', function () {

  var scope;
  var ctrl;
   
  beforeEach(module('assignment'));

  beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('homeController', { $scope: scope });
  }));

  it('should render hello world', function(){
    //expecting something.....
    //expect(scope.hello).toEqual('Hello word!');
  });

});
