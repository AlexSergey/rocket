var TestUtils = require('react/addons').addons.TestUtils,
    React = require('react');


function getClassPrototype(_class) {
  /**
   * Get the prototype of a React class.
   *
   * @param {React} _class
   *
   * @return {prototype}
   */

  try {
    return _class.type.prototype;
  } catch(e) {
    throw new Error('Couldn\'t get the component\'s prototype');
  }
}


function getMethodLocation(_class, method) {
  /**
   * Get the object of which a method is part of.
   *
   * React automagically binds event handlers and stores a cache of them. If we
   * find the method there then we return the cache. If not, we check to see if
   * the method is a static method, in which case we could find it on the
   * constructor. If still not there, we look for it on the class prototype.
   *
   * @param {React} _class
   * @param {String} method
   *
   * @returns {Object}
   */

  var proto = getClassPrototype(_class);

  if (proto.__reactAutoBindMap[method]) {
    return proto.__reactAutoBindMap;
  }

  if (proto.constructor[method]) {
    return proto.constructor;
  }

  if (proto[method]) {
    return proto;
  }

  throw new Error('Could not find method `' + method + '` on the class ' +
                  'prototype');
}


module.exports.spyOnMethod = function(_class, method) {
  /**
   * Spy a method on a React class.
   *
   * Warning: The spy will call through!
   *
   * @param {React} _class
   * @param {String} method The name of the method you want to spy on.
   *
   * @returns {Spy}
   */

  var methodLoc = getMethodLocation(_class, method);

  return sandbox.spy(methodLoc, method);
};


module.exports.stubMethod = function(_class, method, resp) {
  /**
   * Stub a method on a React class.
   *
   * @param {React} _class
   * @param {String} method The name of the method you want to stub.
   * @param {*} [resp] The response the stub should return. If not provided, the
   *    stub will return `undefined`.
   *
   * @returns {Stub}
   */

  var methodLoc = getMethodLocation(_class, method);

  return sandbox.stub(methodLoc, method).returns(resp);
};


module.exports.genComponentStub = function(path) {
  /**
   * Create a component stub to be used with proxyquire.
   *
   * @param {String} path The module path of the component exactly as it's
   *     required in the parent component.
   *
   * @returns {Object.<String,React>}
   */

  var React = require('react');

  var dummy = React.createClass({
    render: function() { return null; }
  });

  var stubs = {};
  stubs[path] = dummy;

  return stubs;
};


module.exports.simulateTyping = function(ref, value) {
  /**
   * Simulate typing into an input.
   *
   * Works by updating the value of the given node and then triggering a change
   * event with TestUtils.Simulate. Only a single event will be triggered.
   *
   * @param {ref} node React reference.
   * @param {String} value
   */

  var node = ref.getDOMNode();
  node.value = value;
  TestUtils.Simulate.change(node);
};


module.exports.render = function(Component, fixture, container) {
  /**
   * Render a component into the DOM.
   *
   * @param {React class} Component
   * @param {Object} fixture
   * @param {DOM} container You should set this to this.container inside your
   *     tests.
   *
   * @returns {React instance}
   */

  return React.render(React.createFactory(Component)(fixture), container);
};
