/**
 * Функция принимает
 * 1 параметр - объект.
 * 2 параметр - ключ-строка, которая будет свойством на первом уровне этого объекта.
 * 3 параметр - ключ-строка, которая будет свойством на втором уровне объекта.
 * Возвращаться должен результат забора по этой цепочке ключей. Если в процессе обращения к какому-то свойству на 1ом или 2ом уровне, такого свойства не будет, нужно вернуть undefined.
 *
 * Пример вызова
 * console.log(task12Old({ obj2: { some: true }}, 'obj2', 'some' )); -> true
 * console.log(task12Old({ obj2: { some: true }}, 'obj2', 'some2' )); -> undefined
 * console.log(task12Old({ obj3: { some: true }}, 'obj2', 'some' )); -> undefined
 */

export function task12Old(object, firstFieldName, secondFieldName) {
  return object[firstFieldName] && object[firstFieldName][secondFieldName];
}

// Напишите реализацию функции task2Old на ESnext ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task12New() {}
