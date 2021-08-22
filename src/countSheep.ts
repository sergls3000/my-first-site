/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

// получили число: 5
// вернуть: "1 sheep...2 sheep...3 sheep...4 sheep...5 sheep..."
function countSheep(count: number) {
  let result = '';

  for (let i = 1; i <= count;  i++) {
    result = result + i + ' sheep...';
  }
  
  return result;
}

// ctrl + ` - открытие терминала
const sheeps = countSheep(5);
console.log(sheeps);