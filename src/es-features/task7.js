/**
 * Просто преобразовать содержимое функции task7Old под современный код
 * Из функции нужно вернуть новый объект,
 * который содержит в себе свойства из объекта obj и obj2
 *
 * Пример вызова
 * console.log(task7Old()); -> {test: 0, foo: 1, bar: 2}
 */

export function task7Old() {
  var obj = { test: 0 };
  var obj2 = { foo: 1, bar: 2 };

  Object.keys(obj2).forEach(function(k) {
    obj[k] = obj2[k];
  });

  return obj; // obj = {test: 0, foo: 1, bar: 2}
}

console.log(task7Old());

// Напишите реализацию функции task7Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

// Есть два решения!
// Решение №1, допустимое, но можно лучше
export const task7New1 = () => {
  const obj = { test: 0 };
  const obj2 = { foo: 1, bar: 2 };

  Object.keys(obj2).forEach((k) => {
    obj[k] = obj2[k];
  });

  return obj;
};

console.log('task7New1 :>> ', task7New1());

// Решение №2, так кажется лучше, сложение объектов
export const task7New2 = () => {
  const obj1 = { test: 0 };
  const obj2 = { foo: 1, bar: 2 };

  const obj = { ...obj1, ...obj2 };

  return obj;
};

console.log('task7New2 :>> ', task7New2());

export default task7New2;
