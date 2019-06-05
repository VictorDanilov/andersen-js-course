/**
 * Реализовать функцию transformArrayToNumber в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив,
 * второй - колбек функция, которая применяется на массив
 * трений - не обязательный парамент - стартовое значение для вычисления.
 * Если не передан третий аргумент - его дефолтное значение должно быть 0
 *
 * Функция возвращает итоговый результат применения функции на массив
 *
 * ([10, 20, 30], (acc, item) => acc + item)) -> 0 + 10 + 20 + 30 = 60
 * ([10, 20, 30], (acc, item) => acc + item, 10) -> 10 + 10 + 20 + 30 = 70
 * ([10, 20, 30], (acc, item) => acc * item)) -> 0 * 10 * 20 * 30 = 0
 * ([10, 20, 30], (acc, item) => acc * item), 1) -> 1 * 10 * 20 * 30 = 6000
 * ([10, 20, 30], (acc, item) => acc - item)) -> 0 - 10 - 20 - 30 = -60
 *
 * console.log(transformArrayToNumber([10, 20, 30], (acc, item) => acc + item)); -> 60
 * console.log(transformArrayToNumber([10, 20, 30], (acc, item) => acc + item, 10)); -> 70
 * console.log(transformArrayToNumber([10, 20, 30], (acc, item) => acc * item)); -> 0
 * console.log(transformArrayToNumber([10, 20, 30], (acc, item) => acc * item), 1); -> 6000
 * console.log(transformArrayToNumber([10, 20, 30], (acc, item) => acc - item)); -> -60
 */

export function transformArrayToNumber(inputArray, callbackFun, startingValue = 0) {
  return inputArray.reduce(callbackFun, startingValue);
}
