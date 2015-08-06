var $ = require('jquery'),
    sinon = require('sinon');

var Backbone = require('backbone');

var User = Backbone.Model.extend({
    urlRoot: '/something'
});

var user = new User();

describe("Sinon fake server", function() {
    var server;

    beforeEach(function () {
        server = sinon.fakeServer.create();
    });

    afterEach(function () {
        server.restore();
    });

    it("should fake a jQuery ajax request and Backbone Model fetch", function () {
        server.respondWith("GET", "/something",
            [200, {"Content-Type": "application/json"},
                '{ "stuff": "is", "awesome": "in here" }']);

        var callbacks = [sinon.spy(), sinon.spy()];

        //Backbone tests
        var fetchSpy = sinon.spy(user, "fetch");

        user.fetch();

        $.ajax({
            url: "/something",
            success: callbacks[0]
        });

        //FAIL REQUEST
        $.ajax({
            url: "/other",
            success: callbacks[1]
        });

        console.log(server.requests); // Logs all requests so far
        server.respond(); // Process all requests so far

        expect(callbacks[0].calledWith({
            stuff: "is",
            awesome: "in here"
        })).to.be.true;

        expect(callbacks[0].calledOnce).to.be.true;

        expect(callbacks[1].calledOnce).to.be.false;

        var response = fetchSpy.getCall(0).returnValue.responseText;
        expect(user.get('stuff')).to.be.equal('is');
        expect(user.get('awesome')).to.be.equal('in here');
    });
});