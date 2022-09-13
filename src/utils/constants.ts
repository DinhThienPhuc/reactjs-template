/* GLOBAL CONSTANTS
   ========================================================================== */

export const APP_NAME = "";

export const DEFAULT_LAYOUT_SIZE = {
  HEADER_HEIGHT: 82,
  NAVIGATOR_HEIGHT: 80,
  NAVIGATOR_MAIN_BUTTON_WRAP: 57,
  NAVIGATOR_MAIN_BUTTON: 45,
  Z_VALUE: 9,
  PADDING_HORIZONTAL: 24,
};

export enum ROUTES {
  HOME = "/",
  NOT_FOUND = "*",
  LOGIN = "/login",
  SEARCH = "/search",
  SETTING = "/setting",
  PROFILE = "/profile",
}

export enum PART_OF_THE_DAY {
  MORNING = "morning",
  AFTERNOON = "afternoon",
  EVENING = "evening",
  NIGHT = "night",
}
