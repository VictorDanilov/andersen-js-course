/**
 * Пример вызова
 * console.log(task4Old(10)); -> {x: 10, y: 10, bar: function, baztest: 'new field'}
 */

export function task4Old() {
  var x = 0;
  var y = 0;
  var foo = function() {
    return 'test';
  };
  var obj = {
    x: x,
    y: y,
    bar: function(x, y) {
      return this.x + x + Math.pow(y, this.y);
    },
  };
  obj['baz' + foo()] = 'new field';
  return obj;
}

// Напишите реализацию функции task4Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task4New() {}
