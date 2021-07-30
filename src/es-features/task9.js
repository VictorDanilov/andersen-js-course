/**
 * Просто преобразовать содержимое функции task9Old под современный код
 *
 * Пример вызова
 * console.log(task9Old()); -> [true, 1]
 */

export function task9Old() {
  var result = 'test'.indexOf('est') !== -1;
  var findResult = [22, 1, 90, 70].filter(function(x) {
    return x < 3;
  })[0];

  return [result, findResult];
}

// Напишите реализацию функции task9Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task9New() {
  const result = 'test'.indexOf('est') !== -1;
  const findResult = [22, 1, 90, 70].filter(x => x < 3)[0];

  return [result, findResult];
}
