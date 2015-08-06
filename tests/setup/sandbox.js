/**
 * Set up a global sinon sandbox which you can use to spy/stub things without
 * having to worry about cleanup. The sandbox is restored after every test.
 */

var sinon = require('sinon'),
    _sandbox = sinon.sandbox.create();


afterEach(function() {
  _sandbox.restore();
});


global.sandbox = _sandbox;
