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
    return super.getName() + ' ' + text;
  }

  getAge() {
    return this.age;
  }

  static defaultUser() {
    return new NewB('test', 0);
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }
}

export function task10Old() {
  const newB = new NewB('Max', 12);
  console.log(newB.getName('Best'));
  console.log(newB.getAge()); 2
  console.log(NewB.defaultUser());
  newB.color = 'red';
  console.log(newB.color);
  return newB;
}

export function task10New() {
  const newB = new NewB('Max', 12);
  console.log(newB.getName('Best'));
  console.log(newB.getAge());
  console.log(NewB.defaultUser());
  newB.color = 'red';
  console.log(newB.color);
  return newB;
}
