/**
 * Просто преобразовать содержимое функции task6Old под современный код
 *
 * Пример вызова
 * console.log(task6Old()); -> ['Max', 100, 'Admin', false, '1']
 */

export function task6Old() {
  function userModule() {
    return {
      name: 'Max',
      value: 100,
      role: { name: 'Admin' },
      cases: [{ id: '1' }],
    };
  }

  var tmp = userModule();
  var name = tmp.name;
  var value = tmp.value;
  var role = tmp.role.name;
  var isActive = tmp.isActive === undefined ? false : tmp.isActive;
  var firstCaseId = tmp.cases[0].id;

  return [name, value, role, isActive, firstCaseId];
}

// Напишите реализацию функции task6Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export const task6New = () => {
  function userModule() {
    return {
      name: 'Max',
      value: 100,
      role: { name: 'Admin' },
      cases: [{ id: '1' }],
    };
  }

  let tmp = userModule();

  let {
    name,
    value,
    role: { name: role },
    cases: [{id: firstCaseId}],
  } = tmp;
  
  return [name, value, role, firstCaseId];
}