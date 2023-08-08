/**
 * Функция принимает объект и ключ-строку.
 * Если в объекте по ключу будет значение null или undefined, то нужно вернуть false.
 * Если какое-либо другое значение, то нужно вернуть это значение.
 *
 * Пример вызова
 * console.log(task11Old({a: 0}, 'a')); -> 0
 * console.log(task11Old({a: 1}, 'a')); -> 1
 * console.log(task11Old({a: null}, 'a')); -> false
 * console.log(task11Old({}, 'a')); -> false
 * console.log(task11Old({a: ''}, 'a')); -> ''
 */

export function task11Old(obj, fieldName) {
  return obj[fieldName] == null ? false : obj[fieldName];
}

// Напишите реализацию функции task11Old на ESnext ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export const task11New = (obj, fieldName) => obj[fieldName] == null ? false : obj[fieldName];
