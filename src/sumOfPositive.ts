/**
 * You get an array of numbers, return the sum of all of the positives ones.

  Example [1,-4,7,12] => 1 + 7 + 12 = 20
  Example [1,2,-5] => 1 + 2 = 3

  Note: if there is nothing to sum, the sum is default to 0.

  // индексы:        0         1          2
  const fruits = ["яблоко", "банан", "апельсин"];

  // индексы:   0, 1,  2
  const nums = [1, 2, -1];

  = оператор присвоения
  присваиваем то, что справа тому что слева
 */
function sumOfPositive ( arr: number[] ) {
  let result = 0;

  // Цикл - посторяющееся действие
  // переменная; условия выхода из цикла; дейвствие с переменной на каждом цикле
  // arr.length - длинна массива
  for ( let i = 0; i < arr.length; i = i + 1 ) {
    let element = arr[i];
    
    if (element > 0 ) {
      result = element + result
    }
  }

  return result;
}

const nums = [1, 2, -1, 7]; // 1 + 2 + 7 = 9

const result = sumOfPositive(nums)
console.log(result);