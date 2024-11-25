export const LOGIN_STATUS = {
  PENDING: "pending",
  NOT_LOGGED_IN: "notLoggedIn",
  IS_LOGGED_IN: "loggedIn",
};

export const SERVER = {
  AUTH_MISSING: "auth-missing",
  AUTH_INSUFFICIENT: "auth-insufficient",
  REQUIRED_USERNAME: "required-username",
  REQUIRED_TASK: "required-task",
  TASK_MISSING: "noSuchId",
};

export const CLIENT = {
  NETWORK_ERROR: "networkError",
  NO_SESSION: "noSession",
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]:
    "Trouble connecting to the network.  Please try again",
  [SERVER.AUTH_INSUFFICIENT]: "Dog is disallowed, please try again.",
  [SERVER.REQUIRED_USERNAME]: "Please enter a valid username",
  [SERVER.REQUIRED_TASK]: "Please enter the task to do",
  default: "Something went wrong.  Please try again",
};
