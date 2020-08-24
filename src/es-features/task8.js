/**
 * Просто преобразовать содержимое функции task8Old под современный код,
 * а именно, содержимое метода calculateNumsFive
 *
 * Пример вызова
 * console.log(task8Old()); -> [0, 5, 10, 15]
 */

export function task8Old() {
  var obj = {
    nums: [0, 2, 5, 10, 15],
    fives: [],
    calculateNumsFive: function() {
      var self = this;
      this.nums.forEach(function(v) {
        if (v % 5 === 0) {
          self.fives.push(v);
        }
      });

      return self.fives;
    },
  };

  return obj.calculateNumsFive();
}

// Напишите реализацию функции task8Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

// Тоже есть два варианта. Вариант первый, длинный и не красивый.
export const task8New1 = () => {
  const obj = {
    nums: [0, 2, 5, 10, 15],
    fives: [],
    calculateNumsFive() {
      this.nums.forEach((v) => {
        if (v % 5 === 0) {
          this.fives.push(v);
        }
      });

      return this.fives;
    },
  };

  return obj.calculateNumsFive();
};

console.log(task8New1());

// Вариант второй, красивый, через filter()
export const task8New2 = () => {
  const obj = {
    nums: [0, 2, 5, 10, 15],
    calculateNumsFive() {
      return this.nums.filter((v) => v % 5 === 0);
    },
  };

  return obj.calculateNumsFive();
};

console.log(task8New2());

export default task8New2;
