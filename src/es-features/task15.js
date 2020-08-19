﻿﻿﻿﻿/**
 * TODO: описание
 *
 * Пример вызова
 * console.log(task15Old([['a', 1], ['b', 2]])); -> {a: 1, b: 2}
 */

export function task15Old(arr) {
  return arr.reduce((a, [key, val]) => {
    a[key] = val;
    return a;
  }, {});
}

// Напишите реализацию функции task15Old на ESnext ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task15New() {
}
