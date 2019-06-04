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

export function any(array, callback) {
    return !!(!callback && array.some(x=> !!x) || callback && array.some(callback));
}

// export function any(array, callback) {
//     if (!callback && array.some(x=> !!x) || callback && array.some(callback)) {
//         return true;
//     } else {
//         return false
//     }
// }

// export function any2(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         if (callback && callback(array[i]) || !callback && array[i]) {
//             return true;
//         }
//     }
//     return false;
// }