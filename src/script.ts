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

// 3) bigint - числа больше 2^53
// const bigNum: bigint = 1234567890123456546848468546546546546546546n;

// 4) string - текст
const str0: string = "любой текст";
const str1: string = 'любой текст';
const str2: string = `любой текст ${num}`;

// console.log('str2: ', str2);

// 5) undefined - значение не инициализированно
let empty: any;
// console.log('empty: ', empty); // undefined

// 6) null - значения нет
const nullable: null = null;

// 7) symbol - уникальное значение
// const sym: Symbol = Symbol('asd');

// 8) Object - объект {свойство : значение}
const obj = {
  prop: 'value',
  prop1: 'value2',
};

// Array - массив
const arr = [ 'первая ', 5, str0];

// Коллекция, массив из объектов
const collection = [obj, obj, obj]

console.log('typeof arr ', typeof arr);
console.log('typeof obj ', typeof obj);
console.log('typeof nullable ', typeof nullable);
console.log('typeof empty ', typeof empty);
console.log('typeof str0 ', typeof str0);
console.log('typeof num ', typeof num);
console.log('typeof white ', typeof white);
console.log('typeof black ', typeof black);

// Объекты - не примитивы (передаются по ссылке), все остальные примитивные типы данных (передаются по значению)