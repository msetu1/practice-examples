// forEach ( filter ,find , map)
// *** filter (<,>,===,!===,%)***
const numbers = [4, 7, 8, 9, 3, 4, 23, 55, 44, 22, 13, 60, 100];
const biggestNum = numbers.filter(x => x > 23);
console.log('biggest number:', biggestNum);
const smallestNum = numbers.filter(x => x < 23);
console.log('smallest number:', smallestNum);
// even number 
const evenNum = numbers.filter(n => n % 2 === 0)
console.log('even number:', evenNum);
// odd number 
const oddNum = numbers.filter(n => n % 2 === 1);
console.log('odd number:', oddNum);


// *** map (+,-,*,/) ***
const number = [4, 5, 2, 6, 7, 3, 9, 8, 22];
// sum 
const sum = number.map(x => x + 10);
console.log('sum:', sum);
// sub 
const sub = number.map(x => x - 2);
console.log('sub:', sub);
// multiple 
const multiplication = number.map(x => x * 2);
console.log('multiplication:', multiplication);
// divided 
const divition = number.map(x => x / 2);
console.log('divided:', divition)