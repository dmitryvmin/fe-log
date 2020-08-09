import {log} from "../src";

describe("log arguments", () => {
  test("it should prints first argument", () => {
    const logMessage = "Log test message";

    console.log = jest.fn();
    log(logMessage);

    expect(console.log).toHaveBeenCalledWith(logMessage);
  });
});

describe("log config object", () => {
  test("it should use logLevel config parameter to log an error", () => {
    const logMessage = "Log test message";
    const logConfig = {logLevel: "error"};

    console.error = jest.fn();
    log(logConfig, logMessage);

    expect(console.error).toHaveBeenCalledWith(logMessage);
  });

  test("it should use logLabel config to label the log message", () => {
    const logMessage = "Log test message";
    const logLabel = "Log test label";
    const logConfig = {logLabel};

    console.log = jest.fn();
    log(logConfig, logMessage);

    expect(console.log).toHaveBeenCalledWith(logLabel);
    expect(console.log).toHaveBeenCalledWith(logMessage);
  });
});
