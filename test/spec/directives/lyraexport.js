'use strict';

describe('Directive: lyraExport', function () {

  // load the directive's module
  beforeEach(module('vleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lyra-export></lyra-export>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('export to lyra...');
  }));
});