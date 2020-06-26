/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) =>
  Object.keys(obj).reduce((acc, current) => {
    if (fields.includes(current)) {
      acc[current] = obj[current];
    }
    return acc;
  }, {});
