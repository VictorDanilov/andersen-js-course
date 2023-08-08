/**
 * Реализовать функцию union в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива, и возвращает массив объедененных значений,
 * без дублирования
 *
 * console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
 * console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]
 */

export const union = (firstArr, secondArr) => {
  let result = [...firstArr, ...secondArr]
  result = new Set(result)
  return [...result]
}

console.log(union([5, 1, 2, 3, 3], [4, 3, 2]));
