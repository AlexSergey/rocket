var sinon = require('sinon');

describe("Test async function", function() {
    this.timeout(15000);
    it("should change the state", function (done) {
        setTimeout(function() {
            done();
        }, 2000);
    });
});