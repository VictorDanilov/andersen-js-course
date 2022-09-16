/**
 * При запуске приложения через yarn start,
 * этот файл будет исполняться автоматически при его редактировании
 * или редактировании тех файлов, которые вы импортировали в этот файл через import.
 * Браузер сам будет перезагружать страницу, когда происходят сохранения изменений
 * в отслеживаемых файлах.
 *
 * Для удобства работы пока все закомментированно.
 * При работе над задачами раскомментируйте нужные импорты и изменяйте этот файл, как вам удобно.
 *
 * Решение каждой из задач оформляйте в том файле, где задача была описана.
 * Далее, импортируете функцию сюда, и вызывайте ее.
 *
 * Для задач на es-features, ниже, уже подготовлены вызовы функций из задач.
 *
 * Для задач на array-practice импортируйте написанные функции сюда и проверяйте их работу тут.
 */

import { task1Old, task1New } from './es-features/task1';
import { task2Old, task2New } from './es-features/task2';
// import { task3Old, task3New } from './es-features/task3';
// import { task4Old, task4New } from './es-features/task4';
// import { task5Old, task5New } from './es-features/task5';
// import { task6Old, task6New } from './es-features/task6';
// import { task7Old, task7New } from './es-features/task7';
// import { task8Old, task8New } from './es-features/task8';
// import { task9Old, task9New } from './es-features/task9';
// import { task10Old, task10New } from './es-features/task10';
// import { task11Old, task11New } from './es-features/task11';
// import { task12Old, task12New } from './es-features/task12';
// import { task13Old, task13New } from './es-features/task13';
// import { task14Old, task14New } from './es-features/task14';
// import { task15Old, task15New } from './es-features/task15';


console.log('task1 old', task1Old(10) === 500); // true
console.log('task1 new', task1New(10) === 500); // true

console.log('=============');

console.log('task2 old', task2Old(1, 2, 'test', false, 'new', 'best') === 12); // true
console.log('task2 new', task2New(1, 2, 'test', false, 'new', 'best') === 12); // true

// console.log('=============');

// console.log('task3 old', task3Old(['hello', 'test', 12])); // [ 1, 2, 'hello', 'test', 12 ]
// console.log('task3 new', task3New(['hello', 'test', 12])); // [ 1, 2, 'hello', 'test', 12 ]

// console.log('=============');

// console.log('task4 old', task4Old()); // {x: 10, y: 10, bar: function, baztest: 'new field'}
// console.log('task4 new', task4New()); // {x: 10, y: 10, bar: function, baztest: 'new field'}

// console.log('=============');

// console.log('task5 old', task5Old(['test', 42], { name: 'foo', val: 7 })); // ['test', 42, 'foo', 7]
// console.log('task5 new', task5New(['test', 42], { name: 'foo', val: 7 })); // ['test', 42, 'foo', 7]

// console.log('=============');

// console.log('task6 old', task6Old()); // ['Max', 100, 'Admin', false, '1']
// console.log('task6 new', task6New()); // ['Max', 100, 'Admin', false, '1']

// console.log('=============');

// console.log('task7 old', task7Old()); // {test: 0, foo: 1, bar: 2}
// console.log('task7 new', task7New()); // {test: 0, foo: 1, bar: 2}

// console.log('=============');

// console.log('task8 old', task8Old()); // [0, 5, 10, 15]
// console.log('task8 new', task8New()); // [0, 5, 10, 15]

// console.log('=============');

// console.log('task9 old', task9Old()); // [true, 1]
// console.log('task9 new', task9New()); // [true, 1]

// console.log('=============');

// console.log('task10 old', task10Old()); // {name: 'Max', age: 12, color: red}
// console.log('task10 new', task10New()); // {name: 'Max', age: 12, color: red}

// console.log('=============');

// console.log('task11 old', task11Old({a: null}, 'a')); // false
// console.log('task11 new', task11New({a: null}, 'a')); // false

// console.log('=============');

// console.log('task12 old', task12Old({ obj2: { some: true }}, 'obj2', 'some2' )); // undefined
// console.log('task12 new', task12New({ obj2: { some: true }}, 'obj2', 'some2' )); // undefined

// console.log('=============');

// console.log('task13 old', task13Old([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log('task13 new', task13New([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]

// console.log('=============');

// console.log('task14 old', task14Old({ a: 10, b: 55, c: 3 })); // [["a", 10], ["b", 55], ["c", 3]]
// console.log('task14 new', task14New({ a: 10, b: 55, c: 3 })); // [["a", 10], ["b", 55], ["c", 3]]

// console.log('=============');

// console.log('task15 old', task15Old([['a', 1], ['b', 2]])); // {a: 1, b: 2}
// console.log('task15 new', task15New([['a', 1], ['b', 2]])); // {a: 1, b: 2}

// console.log('=============');
