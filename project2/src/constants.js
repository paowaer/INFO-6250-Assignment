export const SERVER = {
  AUTH_MISSING: "auth-missing",
  AUTH_INSUFFICIENT: "auth-insufficient",
  REQUIRED_USERNAME: "required-username",
  REQUIRED_MESSAGE: "required-message",
  MESSAGE_MISSING: "message-missing",
};

export const CLIENT = {
  NETWORK_ERROR: "networkError",
  NO_SESSION: "noSession",
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]: "Network connection error. Please try again.",
  [SERVER.AUTH_MISSING]: "Please log in to continue.",
  [SERVER.AUTH_INSUFFICIENT]: "Username is not permitted.",
  [SERVER.REQUIRED_USERNAME]: "Please enter a valid username.",
  [SERVER.REQUIRED_MESSAGE]: "Please enter a message.",
  default: "Something went wrong. Please try again.",
};
