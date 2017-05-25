describe("component: users-list", function() {

  var $componentController;

  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it ('should have no participants if the data service has none', function() {
    var dataService = { participants: [] };
    var ctrl = $componentController('usersList', {dataService}, { santaClaus: 'ho ho ho'});
    expect(ctrl.participants).toBeUndefined();
    ctrl.$onInit();
    expect(ctrl.participants).toBeDefined();
    expect(ctrl.participants.length).toEqual(0);
  });

  it ('should have two participants if the data service has two', function() {
    var dataService = { participants: ['bob', 'mary'] };
    var ctrl = $componentController('usersList', {dataService}, { santaClaus: 'ho ho ho'});
    expect(ctrl.participants).toBeUndefined();
    ctrl.$onInit();
    expect(ctrl.participants).toBeDefined();
    expect(ctrl.participants.length).toEqual(2);
    expect(ctrl.participants[0]).toEqual('bob');
    expect(ctrl.participants[1]).toEqual('mary');
  });

  it ('should have santa claus', function() {
    var ctrl = $componentController('usersList', null, { santaClaus: 'ho ho ho'});
    expect(ctrl.santaClaus).toBe('ho ho ho');
  });

});
