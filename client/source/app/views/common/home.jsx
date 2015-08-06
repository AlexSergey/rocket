var React = require('react');
/**
 Construct Home page

 @class Home
 */
module.exports = React.createClass({
    render() {
        return(
            <div>
                <h1>React Boilerplate 1.0 (Gulp + Browserify + Babelify + React + Backbone + EventEmitter + Node + Express + Mongo + Mocha + Chai)</h1>
                <p>Hello ! This is test boilerplate of <strong>Gulp</strong> + <strong>Browserify</strong> + <strong>Babelify</strong> + <strong>React</strong> + <strong>Backbone</strong> + <strong>EventEmitter</strong> + <strong>Node</strong> + <strong>Express</strong> + <strong>Mongo</strong> + <strong>Mocha</strong> + <strong>Chai</strong></p>
                <p>Little single page application connect to server with RESTfull service, create works and description from it.</p>
                <p>In this application uses NPM, Gulp, Browserify, Babelify, React, ReactRouter, Express, Backbone, Mongoose and other</p>
                <hr />
                <h3>Install:</h3>
                <ol className="list-num">
                    <li> - <span className="code">npm install</span> in main directory</li>
                    <li> - <span className="code">npm install</span> in server/ directory</li>
                    <li> - <span className="code">gulp b</span> build project to development version</li>
                    <li> - <span className="code">gulp b --production</span> build project to production version (uglify, slice console.logs and debuggers)</li>
                    <li> - <span className="code">gulp w</span> watch and run server</li>
                    <li> - <span className="code">gulp test</span> compile tests. Test is tests/specs folders</li>
                    <li> - <span className="code">gulp doc</span> generate JSDoc doumentation, support jsx files</li>
                    <li> - <span className="code">gulp lint</span> scan jshint errors</li>
                    <li> - <span className="code">gulp deploy</span> check JS errors, if all done it will be deploy to FTP</li>
                    <li> - <span className="code">gulp test</span> build test files</li>
                    <li> - <span className="code">gulp test-w</span> apply test watcher</li>
                    <li> - <span className="code">./show_test_results.html</span> Show all tests</li>
                </ol>
                <h3><span className="alert-string">! important !</span> <span>This documentation builder has BUG! You dont use
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUQzNDUyQ0UzNUMzMTFFNUJDNTY4NDcyODkxMjZGRTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUQzNDUyQ0YzNUMzMTFFNUJDNTY4NDcyODkxMjZGRTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RDM0NTJDQzM1QzMxMUU1QkM1Njg0NzI4OTEyNkZFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RDM0NTJDRDM1QzMxMUU1QkM1Njg0NzI4OTEyNkZFMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pob4SWMAAACcSURBVHjaYvz//z8DNQETA5XBqIFYACOjALVdeB9o6HwgViDKRFCywYsZGNb/BymDYBDbAZ96wgZCDFUA4nogvg81+DwQJ+A3EORaQhiiLgDJ1ffBFuEx8D8ejO5qkIvfQ4wg14UQr/fDDWJgmI8epsSGYQIQ74ca8h5qqAJ5kYJwDSi8CoBYgLJYhrgsgSifADHjaPE1+AwECDAAkIKEJBm21bwAAAAASUVORK5CYII="/>
                    arrow functions and inside string this symbol !</span> and name must not contain spaces and "!" symbol</h3>
                <hr />
                <p>For change configuration gulp and add custom things, you need modify gulpfile.js, task folder, and config in task folder</p>
            </div>
        )
    }
});