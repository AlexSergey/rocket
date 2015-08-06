/**
 * Entry point for running the tests in Node.
 *
 * We first set up jsdom so React doesn't blow up and then include the normal
 * setup module.
 */

require('./setup/jsdom.js');

require('./setup.js');
