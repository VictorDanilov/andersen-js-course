/**
 * Если не определены b и c, инициализировать их дефолтными значениями 70 и 420
 *
 * Пример вызова
 * console.log(task1Old(10) === 500); -> true
 */

export function task1Old(a, b, c) {
  if (b === undefined) {
    b = 70;
  }

  if (c === undefined) {
    c = 420;
  }

  return a + b + c;
}

// Напишите реализацию функции task1Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export const task1New = (a, b = 70, c = 420) => a + b + c;
