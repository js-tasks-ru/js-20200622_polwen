/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const russianAlphabet = 'АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя'.split('');
const englishAlphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'.split('');
const bothAlphabets = englishAlphabet.concat(russianAlphabet);

export function sortStrings(arr, param = 'asc') {
  const arrToSort = arr.slice();
  return param === 'desc' ? arrToSort.sort(compare).reverse() : arrToSort.sort(compare);
}


function compare(word1, word2) {
  const numbersOfLettersInWord1 = transformToArrayOfNumbers(word1);
  const numbersOfLettersInWord2 = transformToArrayOfNumbers(word2);
  const length = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < length; i++) {
    if (numbersOfLettersInWord1[i] < numbersOfLettersInWord2[i] || numbersOfLettersInWord1[i] === undefined) {
      return -1;
    }

    if (numbersOfLettersInWord1[i] > numbersOfLettersInWord2[i] || numbersOfLettersInWord2[i] === undefined) {
      return 1;
    }
  }
}

const transformToArrayOfNumbers = (word) => word.split('').map((letter) => bothAlphabets.indexOf(letter));
