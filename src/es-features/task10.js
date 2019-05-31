function A(name) {
  this.name = name;
}

A.prototype.getName = function() {
  return this.name;
};

function B(name, age) {
  A.call(this, name);
  this.age = age;
}

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

B.prototype.getName = function(text) {
  return A.prototype.getName.call(this) + ' ' + text;
};

B.prototype.getAge = function() {
  return this.age;
};

B.defaultUser = function() {
  return new B('test', 0);
};

Object.defineProperty(B.prototype, 'color', {
  get: function() {
    return this._color;
  },
  set: function(color) {
    this._color = color;
  },
});

export function task10Old() {
  var b = new B('Max', 12);
  console.log(b.getName('Best')); // Max Best
  console.log(b.getAge()); // 12
  console.log(B.defaultUser()); // {name: 'test', age: 0}
  b.color = 'red';
  console.log(b.color); // red
  return b;
}

// Напишите реализацию функции task10Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task10New() {}
