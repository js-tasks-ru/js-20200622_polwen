/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const array = string.split('');
  return array
    .reduce((acc, elem, index) => {
      array[index] !== array[index - 1] ? acc.push(`-${elem}`) : acc.push(elem);
      return acc;
    }, [])
    .join('')
    .split('-')
    .map((elem) => elem.slice(0, size))
    .join('');
}
