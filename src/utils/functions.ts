/* GLOBAL FUNCTIONS
   ========================================================================== */

import { PART_OF_THE_DAY } from "./constants";

/**
 * Reload current browser link
 * It only works in Client Side Render, because window always existed
 * For Server Side Render, please check window first before any window's methods calls
 */
export const reload = () => {
  window.location.reload();
};

/**
 * Safely parse JSON format
 * @param jsonString input json string
 * @returns data in json format or undefined
 */
export const parseJSON = <T>(jsonString: string | null): T | null => {
  try {
    return jsonString === "undefined" ? null : JSON.parse(jsonString ?? "");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Parsing error on ", { jsonString });
    return null;
  }
};

/**
 * Get value from Session Storage by key
 * @param key to get value from Session Storage
 * @returns JSON data
 */
export const getFromSessionStorage = <T>(key: string): T | null => {
  const value = window.sessionStorage.getItem(key);

  if (value) {
    return parseJSON(value);
  }
  return null;
};

/**
 * Get value from Local Storage by key
 * @param key to get value from Local Storage
 * @returns JSON data
 */
export const getFromLocalStorage = <T>(key: string): T | null => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return parseJSON(value);
  }
  return null;
};

export const getPartOfTheDay = () => {
  const d = new Date();
  const hour = d.getHours();

  if (5 <= hour && hour <= 11) {
    return PART_OF_THE_DAY.MORNING;
  }

  if (12 <= hour && hour <= 17) {
    return PART_OF_THE_DAY.AFTERNOON;
  }

  if (17 <= hour && hour <= 21) {
    return PART_OF_THE_DAY.EVENING;
  }

  return PART_OF_THE_DAY.NIGHT;
};
