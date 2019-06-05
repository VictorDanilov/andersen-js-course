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

const task9New =() => {
  let result = 'test'.includes('est');
  const findResult = [22, 1, 90, 70].find(function(x) { return x <3 });
  return [result, findResult];
}
