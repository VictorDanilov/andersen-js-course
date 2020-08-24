/**
 * Нужно переписать функции-конструкторы на классы
 */

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

function task10Old() {
  var b = new B('Max', 12);
  console.log(b.getName('Best')); // Max Best
  console.log(b.getAge()); // 12
  console.log(B.defaultUser()); // {name: 'test', age: 0}
  b.color = 'red';
  console.log(b.color); // red
  return b;
}

task10Old();

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

    this.color = 'green';
  }

  getName(text) {
    return this.name + ' ' + text;
  }

  getAge() {
    return this.age;
  }

  static defaultUser() {
    return new NewB('test', 0);
  }
}

function task10New() {
  const b = new NewB('Max', 12);

  console.log(b.getName('Best')); // Max Best
  console.log(b.getAge()); // 12

  console.log(NewB.defaultUser()); // {name: 'test', age: 0}

  console.log(b.color); // green
  b.color = 'red';
  console.log(b.color); // red

  return b;
}

task10New();

export default task10New;

/**
 * Примечание. Убраны лишние экспорты, для возможности дебажить в хроме,
 * чтобы лишний раз экспорты не убирать.
 *
 *  По условию проверки
 *  b.color = 'red';
 *  console.log(b.color); // red
 *  это свойство будет работать на экземпляре, даже если его нет в классе
 *  но для я решил определить это свойство
 *  в конструкторе this.color = 'green'
 *  теперь можно проверить что color define
 *  console.log(b.color); // green
 *  b.color = 'red'; // и переопределяется
 *  console.log(b.color); // red
 *
 */
