"use strict";
exports.__esModule = true;
var src_1 = require("../src");
describe("log arguments", function () {
    test("it should prints first argument", function () {
        var logMessage = "Log test message";
        console.log = jest.fn();
        src_1.log(logMessage);
        expect(console.log).toHaveBeenCalledWith(logMessage);
    });
});
describe("log config object", function () {
    test("it should use logLevel config parameter to log an error", function () {
        var logMessage = "Log test message";
        var logConfig = { logLevel: "error" };
        console.error = jest.fn();
        src_1.log(logConfig, logMessage);
        expect(console.error).toHaveBeenCalledWith(logMessage);
    });
    test("it should use logLabel config to label the log message", function () {
        var logMessage = "Log test message";
        var logLabel = "Log test label";
        var logConfig = { logLabel: logLabel };
        console.log = jest.fn();
        src_1.log(logConfig, logMessage);
        expect(console.log).toHaveBeenCalledWith(logLabel);
        expect(console.log).toHaveBeenCalledWith(logMessage);
    });
});
