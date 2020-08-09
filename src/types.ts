import {LogLevel} from "./constants";
import {ValueOf} from "./utils/getTSValueOf";

export type LogLevelKeys = keyof typeof LogLevel;
export type LogLevelValues = ValueOf<typeof LogLevel>;

type LoggerConfig = {
  logLevel: LogLevelValues;
  logLabel: string;
};

type LoggerInput = any;

export type LoggerArgs = LoggerConfig | LoggerInput;
