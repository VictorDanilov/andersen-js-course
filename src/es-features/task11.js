﻿/**
 * Функция принимает имя полей (строкой), если поле не найденно то должно вернуться false.
 *
 * Пример вызова
 * console.log(task11Old('isBestField')); -> true
 * console.log(task11Old('isBestField1')); -> false
 */

export function task11Old(fieldName) {
  var myObject = {
    isBestField: true
  }
  
  return myObject[fieldName] || false;
}

// Напишите реализацию функции task11Old на ESnext ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task11New() {}
