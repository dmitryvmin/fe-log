export type LoggerLogLevel =
  | "debug"
  | "error"
  | "info"
  | "log"
  | "trace"
  | "warn"
  ;

type LoggerConfig = {
  logLevel: LoggerLogLevel;
  logLabel: string;
};

type LoggerInput = any;

export type LoggerArgs = LoggerConfig | LoggerInput;
