<p align="center"><h1>Rocket React</h1></p>

<a href="http://gooddev.org/"><img src="http://gooddev.org/rocket/logo_rocket.jpg" alt="Use boilerplate from https://github.com/AlexSergey/rocket" /></a>

## This is test boilerplate of React + Babel + Backbone + Node + Mongo

Little single page application connect to server with RESTfull service, create works and description from it.

## Build system
- [Gulp](http://gulpjs.com/) - Build system
- [NPM](https://www.npmjs.com/) - Package manager
- [Browserify](http://browserify.org/) - CommonJS in the browser
- [Babel](https://babeljs.io/) - transpile ES6 (including JSX) to ES5
- [babelify](https://github.com/babel/babelify) - Babel transform for Browserify

## Front End
- [React](http://facebook.github.io/react/) - React framework
- [Backbone](http://backbonejs.org/) - Backbone Framework
- [react.backbone](https://github.com/clayallsopp/react.backbone) - Connect Backbone model and collection to React
- [wolfy87-eventemitter](https://github.com/Olical/EventEmitter) - Publish Subscriber module
- [react-router](https://github.com/rackt/react-router) - A complete routing library for React

## Testing tool
- [Mocha](http://mochajs.org/) - testing framework
- [Chai](http://chaijs.com) - assertion library
- [Sinon](http://sinonjs.org) - mocking library
- [jsdom](https://github.com/tmpvar/jsdom) - server side DOM

## Documentation
- [jsdoc](https://github.com/jsdoc3/jsdoc) - Documentation generator with custom theme and custom settings

## Server Side
- [Node](https://nodejs.org/) - Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
- [Express](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Mongo](https://www.mongodb.org/) - MongoDB (from humongous) is a cross-platform document-oriented NoSQL database.
- [Mongoose](http://mongoosejs.com/) - Elegant mongodb object modeling for node.js
- [Winston](https://github.com/winstonjs/winston) - A multi-transport async logging library for node.js.

Install:

 in main directory
```sh
    $ npm install
```
in server/ directory
```sh
    $ npm install
```
build project to development version
```sh
    $ gulp b
```
build project to production version (uglify, slice console.logs and debuggers)
```sh
    $ gulp b --production
```
watch and run server
```sh
    $ gulp w
```
generate JSDoc doumentation, support jsx files
```sh
    $ gulp doc
```
scan jshint errors
```sh
    $ gulp lint
```
check JS errors, if all done it will be deploy to FTP
```sh
    $ gulp deploy
```
build test files
```sh
    $ gulp test
```
apply test watcher
```sh
    $ gulp test-w
```
**! important ! This documentation builder has BUG! You dont use -> arrow functions and inside string this symbol !**

In 'show_test_results.html' you can see all tests after build

For change configuration gulp and add custom things, you need modify gulpfile.js, task folder, and config in task folder