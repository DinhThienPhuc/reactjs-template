/* GLOBAL HELPERS
   ========================================================================== */

import { PART_OF_THE_DAY } from "./constants";

export {
  getFromLocalStorage,
  getFromSessionStorage,
  parseJSON,
  reload,
} from "@dinhthienphuc/artemis";

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
