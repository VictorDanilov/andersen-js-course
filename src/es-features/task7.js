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

// Напишите реализацию функции task7Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export const task7New = (() => {
  let obj = {test: 0};
  let obj2 = { foo: 1, bar: 2 };
  return {...obj, ...obj2};
});
//second solution
export const task7NewSecondOption = (() => {
  let obj = {test: 0};
  let obj2 = { foo: 1, bar: 2 };
  return Object.assign({},obj,obj2);
});
