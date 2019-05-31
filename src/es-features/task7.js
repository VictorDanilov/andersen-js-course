/**
 * Пример вызова
 * console.log(task7Old()); -> {test: 0, foo: 1, bar: 2}
 */

export function task7Old() {
  var obj = { test: 0 };
  var obj2 = { foo: 1, bar: 2 };

  Object.keys(obj2).forEach(function(k) {
    obj[k] = obj2[k];
  });

  return obj; // obj !== obj2
}

// Напишите реализацию функции task7Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task7New() {}
