/**
 * Реализовать функцию union в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива, и возвращает массив объедененных значений,
 * без дублирования
 *
 * console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
 * console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]
 */


export function union(arr1, arr2) {
  const concArr = arr1.concat(arr2);
  return Array.from(new Set(concArr));
}

console.log(union([5, 1, 2, 3, 3], [4, 3, 2]));
console.log(union([5, 1, 3, 3, 4], [1, 3, 4]));