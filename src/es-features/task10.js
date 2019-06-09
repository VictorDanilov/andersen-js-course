/**
 * Нужно переписать функции-конструкторы на классы
 */

function A(name) {
  this.name = name;
}

A.prototype.getName = function () {
  return this.name;
};

function B(name, age) {
  A.call(this, name);
  this.age = age;
}

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

B.prototype.getName = function (text) {
  return A.prototype.getName.call(this) + ' ' + text;
};

B.prototype.getAge = function () {
  return this.age;
};

B.defaultUser = function () {
  return new B('test', 0);
};

Object.defineProperty(B.prototype, 'color', {
  get: function () {
    return this._color;
  },
  set: function (color) {
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

// Перепишите функции-конструкторы A и B ниже этого комментария.
// Названия классов должны быть NewA и NewB
// Изменить тело функции task10Old, написав task10New, где заиспользуете
// класс так, как использовалась функция-конструктор B в task10Old

class NewA {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class NewB extends NewA {

  constructor(name, age) {
    super(name);

    this.age = age;
  }

  getName(text) {
    return `${super.getName()} ${text}`;
  }

  getAge() {
    return this.age;
  }

  defaultUser() {
    return new NewB('test', 0);
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }
}

export function task10New() {
  var b = new NewB('Max', 12);
  console.log(b.getName('Best')); // Max Best
  console.log(b.getAge()); // 12
  console.log(b.defaultUser()); // {name: 'test', age: 0}
  b.color = 'red';
  console.log(b.color); // red
  return b;
}
