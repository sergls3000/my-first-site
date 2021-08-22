// JavaScript - язык для разработки веб интерфейсов
// TypeScript - типизированный JavaScript

// Переменная (variable)
// var x = 5; - устаревший синтаксис

const x = 5; // константа
let y = 10; // переменная

//x = 10; // проблема, Не удается задать значение для `x", так как это константа
y = 5; // переменная, можем изменять

// console.log('x: ', x);
// console.log('y: ', y);

// ctrl + `  - команда для открытия терминала
// tsc script.ts

// Типизация - 8 типов
// 1) boolean true / false
const white = true;
const black: boolean = false;

// 2) number - числа до 2^53
const num: number = 123_456_789_012_345;

// 3) string - текст
const str0: string = "любой текст";
const str1: string = 'любой текст';
const str2: string = `любой текст ${num}`;

// console.log('str2: ', str2);

// 4) Array - массив
// индексы:        0         1          2
const fruits = ["яблоко", "банан", "апельсин"];
// индексы:    0   1   2
const dates = [1, 10, 15];

// fruits[0] - яблоко
// console.log(fruits[0] + ' ' + dates[0]);
// console.log(fruits[1] + ' ' + dates[1]);
// console.log(fruits[2] + ' ' + dates[2]);


// 5) Object - объект {ключ : значение}
const user = {
  age: 25,
  name: 'John',
  address: 'Krasnoyarsk',
  isAdult: true,
}

// console.log(user.age);
// console.log(user.name);
// console.log(user.address);
// console.log(user.isAdult);

// Function - функция, действие
// входящее значение - функция - выходящее значние
function sum(a: number, b: number) {
  return a + b;
}

// альтернативный синтаксис создания функции
const sum2 = (a: number, b: number) => a + b;

// операторы: +-*/%
const isEven = (a: number) => a % 2 === 0;
// сравнение через тройное равно === с учётом типов

// условные операторы if (если) else (иначе)
function detectCategory(age: number) {
  if (age < 18) {
    console.log('молодой');
  } else if (age < 50) {
    console.log('средний возраст');
  } else {
    console.log('старый');
  }
}

// Цикл - посторяющееся действие
//   переменная; условия выхода из цикла; дейвствие с переменной на каждом цикле
for (let i = 0; i <= 200; i++) {
  // console.log(i);
}

// идентичные действия
// i++ 
// i += 1
// i = i + 1
