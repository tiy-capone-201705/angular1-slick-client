describe("component: users-list", function() {
  let dataService = null;

  beforeEach(module('app'));
  beforeEach(function () {
    let mock = {};

    module(function($provide) {
      $provide.value('socketService', mock);
    });

    inject(function($injector) {
      dataService = $injector.get('dataService');
    });
  });

  it('should have initialized participants and messages', function () {
    expect(dataService.participants).toBeDefined();
    expect(dataService.messages).toBeDefined();
  });

});
