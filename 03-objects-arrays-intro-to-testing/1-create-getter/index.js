/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return (obj) => {
    path.split('.').forEach((key) => (obj.hasOwnProperty(key) ? (obj = obj[key]) : (obj = false)));
    return obj === false ? undefined : obj;
  };
}

/* мне не нравится мое решение потому что приходится присвивать какое-то
значение переменной acc

как вариант, можно итеррироваться по массиву циклом for of
и прямо внутри цикла сделать return из функции

Еще мне бы хотелось решить эту задачу методом reduce, примерно так:

function createGetter(path) {
  return (obj) => {
    return path.split('.').reduce((acc, key) => {
      if (acc.hasOwnProperty(key)) {
        acc = acc[key];
      } else {
        acc = undefined;  <- но проблема вот здесь
      }
      return acc;
    }, obj)
  }
}

*/
