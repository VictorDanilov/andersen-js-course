/**
 * Реализовать функцию any в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив, второй - колбек-функция, которая применяется на массив
 * Колбек-функция применяется на каждый элемент массива и проверяет условие
 * Если хотя бы один раз колбек-функция вернула true, то any возвращает true
 * Иначе - false
 *
 * Если колбек-функция не была передана, то из any возвращаем true,
 * если в массиве есть хотя бы один элемент, который дает true,
 * если все значения в массиве дают false, то возвращаем false
 *
 * console.log(any([0, 1, 2, 0], x => x >= 2)); -> true
 * console.log(any([0, 0, 1, 0])); -> true
 * console.log(any([0, 0, 0, 0])); -> false
 */

export const any = (arr = [], cb) => {
  let find = false;
  if (cb) {
    find = arr.find((item) => cb(item));
  } else {
    find = arr.find((item) => Boolean(item));
  }
  return Boolean(find);
};

const arr1 = [0, 1, 2, 0];
const arr2 = [0, 0, 1, 0];
const arr3 = [0, 0, 0, 0];
const cb = (x) => x >= 2;

console.log('arr1, cb :>> ', any(arr1, cb));
console.log('arr2, cb :>> ', any(arr2, cb));
console.log('arr3, cb :>> ', any(arr3, cb));
console.log('arr1 :>> ', any(arr1));
console.log('arr2 :>> ', any(arr2));
console.log('arr3 :>> ', any(arr3));

export default any;
