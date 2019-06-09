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

// При желании, можете использовать стрелочную функцию, вместо обычной

export const task5New = (array, obj) => {
  let [name, val] = array;
  let {objName, objValue} = obj;
  return [name, val, objName, objValue];
};
// console.log(task5New(['test', 42], { objName: 'foo', objValue: 7 }));