import {LoggerArgs, LogLevelValues,} from "./types";
import {getConsoleValueOf} from "./utils/getConsoleValueOf";

/**
 * main fe-log utility script
 *
 * @param config - if the first argument is a [LoggerConfig] object, log treats it as the config
 * @param args
 * @return void
 *
 */
const log = (config: LoggerArgs, ...args: any[]): void => {

  // TODO: add env variable support
  // if (process.env.FELOG_STATUS === "OFF") {
  //   return;
  // }

  const LOG_STYLES = "color: green; font-size: 14px";
  const LOG_PREFIX = "==========";

  // Group the log call and mark it with a timestamp
  let logGroupLabel = `${LOG_PREFIX} ${Date.now()}`;
  let logLevel: LogLevelValues = "log"; // TODO: ?? process.env.FELOG_LEVEL
  // Was the first argument a log configuration object?
  let logConfig = false;

  // Check if the first argument could be a logger config...
  if (typeof config === "object") {

    // If the argument is an object and contains a logLevel key, assume it is
    if (Object.keys(config).includes("logLevel")) {

      // Get the logLevel value
      const {logLevel: logLevelArg} = config;

      // Check that the value is valid
      if (
        logLevelArg !== "debug"
        && logLevelArg !== "error"
        && logLevelArg !== "info"
        && logLevelArg !== "log"
        && logLevelArg !== "trace"
        && logLevelArg !== "warn"
      ) {
        log(
          {
            logLevel: "warn",
          },
          "Logger logLevel value is invalid",
          logLevelArg,
          "logLevel should be set to 'debug', 'error', 'info', 'log', 'trace', or 'warn'",
        );
        return;
      }

      logLevel = logLevelArg;
      logConfig = true;
    }

    // Check of object contains a logLabel property
    if (Object.keys(config).includes("logLabel")) {

      const {logLabel: logLabelArg} = config;
      if (!logLabelArg) {
        return;
      }

      logGroupLabel = logLabelArg;
      logConfig = true
    }
  }

  // Open log group
  console.log(logGroupLabel);
  console.group();

  // Print logs
  // If first argument wasn't a config object, print it
  if (!logConfig) {
    getConsoleValueOf(logLevel)(config);
  }
  // If args 2+ were provided, print them
  if (args) {
    args.map((l) => {
      // If a logLevel wasn't provided, default to the DEFAULT_LOG_LEVEL
      // TODO: add log styling
      // console[logLevel ?? DEFAULT_LOG_LEVEL](`%c${a}`, LOG_STYLES);
      getConsoleValueOf(logLevel)(l);
    });
  }

  // Close log group
  console.groupEnd();
};

export {log};
