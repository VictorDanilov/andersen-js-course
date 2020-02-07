/**
 * Просто преобразовать функцию task5Old под современный код
 *
 * Пример вызова
 * console.log(task5Old(["test", 42], { name: "foo", val: 7 })); -> ['test', 42, 'foo', 7]
 */

export function task5Old(array, obj) {
  var name = array[0];
  var val = array[1];
  var objName = obj.name;
  var objValue = obj.val;
  return [name, val, objName, objValue];
}

// Напишите реализацию функции task5Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task5New(array, obj) {
  const name = array[0];
  const val = array[1];
  const objName = obj.name;
  const objValue = obj.val;
  return [name, val, objName, objValue];
}
