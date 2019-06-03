/**
 * Реализовать функцию createGenerator в этом файле, и экспортировать ее.
 *
 * При каждом вызове метода .next() происходит возврат следующего значения из массива
 * Когда все элементы будут возвращены,
 * следующие вызовы метода .next() должны возвращать строку 'Complete!'
 *
 * const generator = createGenerator([1, '6', 3, 2]);
 * generator.next(); -> 1
 * generator.next(); -> '6'
 * generator.next(); -> 3
 * generator.next(); -> 2
 * generator.next(); -> 'Complete!'
 * generator.next(); -> 'Complete!'
 */

export function createGenerator(array) {
    var i = 0;
    var a = function () {};

    a.next = function () {
        if (i < array.length) {
            return array[i++];
        } else {
            return 'Complete!'
        }
    };

    return a;
}

export function createGenerator2(array) {
    var i = 0;

    return {
        next: function () {
            if (i < array.length) {
                return array[i++];
            } else {
                return 'Complete!'
            }
        }
    }
}