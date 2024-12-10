export const SERVER = {
  AUTH_MISSING: "auth-missing",
  AUTH_INSUFFICIENT: "auth-insufficient",
  INVALID_OR_FORBIDDEN_USERNAME: "invalid-or-forbidden-username",
  USERNAME_ALREADY_EXISTS: "username-already-exists",
  ERROR_REGISTERING_USER: "error-registering-user",
  USER_NOT_AUTHENTICATED: "user-not-authenticated",

  REQUIRED_USERNAME: "required-username",
  REQUIRED_FIELDS: "required-fields",
  REQUIRED_CATID: "required-catId",
  REQUIRED_ADOPTER_INFO: "required-adopter-info",

  CAT_NOT_FOUND: "cat-not-found",
  CAT_ALREADY_RESERVED: "cat-already-reserved",
  CAT_NOT_RESERVED: "cat-not-reserved",
  CAT_NOT_RESERVED_BY_USER: "cat-not-reserved-by-user",
  CAT_NOT_AVAILABLE_FOR_RESERVATION: "cat-not-available-for-reservation",
  UNABLE_TO_RESERVE_CAT: "unable-to-reserve-cat",
  UNABLE_TO_CANCEL_RESERVATION: "unable-to-cancel-reservation",

  UNAUTHORIZED_ADMIN_ACCESS_REQUIRED: "unauthorized-admin-access-required",
  CAT_ALREADY_EXISTS: "cat-already-exists",

  USER_ALREADY_EXISTS: "user-already-exists",
  USER_NOT_FOUND: "user-not-found",
  USERNAME_NOT_PERMITTED: "username-not-permitted",
  INVALID_USERNAME: "invalid-username",
  INVALID_ACTION: "invalid-action",
  FORBIDDEN: "forbidden",
  INTERNAL_ERROR: "internal-error",
};

export const CLIENT = {
  NETWORK_ERROR: "networkError",
  NO_SESSION: "noSession",
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]:
    "Trouble connecting to the network. Please try again.",
  [SERVER.AUTH_INSUFFICIENT]: "Authentication insufficient. Access denied.",
  [SERVER.INVALID_OR_FORBIDDEN_USERNAME]: "Invalid or forbidden username.",
  [SERVER.USERNAME_ALREADY_EXISTS]: "Username already exists.",
  [SERVER.ERROR_REGISTERING_USER]: "Error registering user.",
  [SERVER.USER_NOT_AUTHENTICATED]: "User not authenticated.",

  [SERVER.AUTH_MISSING]: "Authentication information is missing.",
  [SERVER.REQUIRED_USERNAME]: "Please enter a valid username.",
  [SERVER.REQUIRED_FIELDS]: "All fields are required.",
  [SERVER.REQUIRED_CATID]: "Please provide a valid cat ID.",
  [SERVER.REQUIRED_ADOPTER_INFO]:
    "Adopter information with phone, address, and email is required for reservation.",
  [SERVER.CAT_NOT_FOUND]: "The specified cat does not exist.",
  [SERVER.CAT_ALREADY_RESERVED]: "This cat is already reserved.",
  [SERVER.CAT_NOT_RESERVED]: "This cat is not reserved.",
  [SERVER.CAT_NOT_RESERVED_BY_USER]: "You have not reserved this cat.",
  [SERVER.CAT_NOT_AVAILABLE_FOR_RESERVATION]:
    "Cat not available for reservation.",
  [SERVER.UNABLE_TO_RESERVE_CAT]: "Unable to reserve cat.",
  [SERVER.UNABLE_TO_CANCEL_RESERVATION]: "Unable to cancel reservation.",
  [SERVER.UNAUTHORIZED_ADMIN_ACCESS_REQUIRED]:
    "Unauthorized: Admin access required.",
  [SERVER.CAT_ALREADY_EXISTS]: "Cat already exists.",

  [SERVER.USER_ALREADY_EXISTS]:
    "Username already exists. Please choose another one.",
  [SERVER.USER_NOT_FOUND]: "User not found. Please register first.",
  [SERVER.USERNAME_NOT_PERMITTED]: "Username is not permitted.",
  [SERVER.INVALID_USERNAME]: "Invalid username.",
  [SERVER.INVALID_ACTION]: "Invalid action specified.",
  [SERVER.FORBIDDEN]: "You do not have permission to perform this action.",
  [SERVER.INTERNAL_ERROR]:
    "Something went wrong on the server. Please try again.",
  "user-registered": "User registered successfully.",
  "logged-out": "Logged out successfully.",
  "cat-reserved": "Cat reserved successfully.",
  "cat-reservation-canceled": "Cat reservation canceled.",
  "cat-released": "Cat released successfully.",
  "cat-added": "Cat added successfully.",
  default: "Something went wrong. Please try again.",
};
