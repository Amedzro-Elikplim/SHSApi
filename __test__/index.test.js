const express = require("express");


beforeEach(async () => {
    express();
});


describe("should perform simple logics", () => {

    test("perform mathematical calculations", () => {
        expect(1 + 1).toBe(2);
    });

});