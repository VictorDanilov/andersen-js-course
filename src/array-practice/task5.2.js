/**
 * Реализовать функцию createGenerator в этом файле, и экспортировать ее.
 *
 * При каждом вызове метода .next() происходит возврат следующего значения из массива
 * Когда все элементы будут возвращены,
 * следующие вызовы метода .next() должны возвращать строку 'Complete!'
 *
 * В решении функции-генераторы (function*) не использовать.
 *
 * const generator = createGenerator([1, '6', 3, 2]);
 * generator.next(); -> 1
 * generator.next(); -> '6'
 * generator.next(); -> 3
 * generator.next(); -> 2
 * generator.next(); -> 'Complete!'
 * generator.next(); -> 'Complete!'
 */

// Решение через класс
class CreateGenerator {
  constructor(arr) {
    this.arr = arr;
  }

  next() {
    if (!this.arr[0]) {
      return 'Complete!';
    }
    return this.arr.shift();
  }
}

const arr = [1, '6', 3, 2];
const generator = new CreateGenerator(arr);

console.log('generator.next(); :>> ', generator.next());
console.log('generator.next(); :>> ', generator.next());
console.log('generator.next(); :>> ', generator.next());
console.log('generator.next(); :>> ', generator.next());
console.log('generator.next(); :>> ', generator.next());

export default CreateGenerator;
