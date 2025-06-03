/**
 * React fucntions to convert the user's score.
 *
 * @param {Number} score - the user's score which is between 0 and 1.
 *
 * @returns {JSX.Element}
 *
 * @description
 * This function is used to convert the user's score into a percentage.
 */

export function converToPercent(score) {
  let nombre = score;
  let pourcentage = nombre * 100;
  return pourcentage + "%";
}

/**
 * React fucntions to covert day numbers.
 *
 * @param {Number} dayNumber - the day number which is between 1 and 7
 *
 * @returns {JSX.Element}
 *
 * @description
 * This function is used to daynnumbers into the correspinding letter of the day of the week.
 */

export function convertDayNumberToLetter(dayNumber) {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return days[dayNumber - 1] || "";
}
