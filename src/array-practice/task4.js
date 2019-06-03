/**
 * Реализовать функцию union в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива, и возвращает массив объедененных значений,
 * без дублирования
 *
 * console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
 * console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]
 */

export function union(arrayOne, arrayTwo) {
    let arrayResult = [];
    
    let check = (array1) => {
        for (let i = 0; i < array1.length; i++) {
            if (arrayResult.indexOf(array1[i]) < 0) {
                arrayResult.push(array1[i]);
            }
        }
    };

    check(arrayOne);
    check(arrayTwo);

    return arrayResult;
}