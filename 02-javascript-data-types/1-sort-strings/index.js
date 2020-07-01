/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

 // решение с использованием конструктора
export function sortStrings(arr, param = 'asc') {
  const arrToSort = arr.slice();
  const collator = new Intl.Collator(undefined, { caseFirst: 'upper' });

  return param === 'desc' ? arrToSort.sort(collator.compare).reverse() : arrToSort.sort(collator.compare);
}

// другой вариант решения с использованием localCompare

// function sortStrings(arr, param = 'asc') {
//   const arrToSort = arr.slice();

//   return param === 'desc'
//     ? arrToSort.sort((a, b) => a.localeCompare(b, undefined, { caseFirst: 'upper' })).reverse()
//     : arrToSort.sort((a, b) => a.localeCompare(b, undefined, { caseFirst: 'upper' }));
// }
