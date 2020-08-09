import {LogLevelValues} from "../types";

/**
 * Returns a console function of the requested [logLevel] type
 */
function getConsoleValueOf(logLevel: LogLevelValues): Console[keyof Console] {
  switch (logLevel) {
    case "debug":
      return console.debug;
    case "error":
      return console.error;
    case "info":
      return console.info;
    case "trace":
      return console.trace;
    case "warn":
      return console.warn;
    default:
      return console.log;
  }
}

export {getConsoleValueOf};
