var React = require('react');


beforeEach(function() {
  /**
   * Prepare a container to mount the component before each test.
   *
   * If there's a container on the page named #test-area, use that, otherwise
   * create a detached div and use that. The former case is useful when running
   * the tests in your own browser so you can debug how the component is
   * rendered.
   */

  var testArea = document.querySelector('#test-area');

  if (testArea) {
    this.container = testArea;
  } else {
    this.container = document.createElement('div');
  }
});


afterEach(function() {
  /**
   * Unmount the component after each test.
   */

  React.unmountComponentAtNode(this.container);
});
