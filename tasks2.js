// problem : 4 map number of array er each number divide by 7and return the array 
const numbers = [50, 60, 77, 21, 49, 64, 22, 100, 42];
const divided = numbers.map(num => num / 7);
console.log(divided);
// different between forEach,filter,find 
const result = numbers.filter(num => num % 2 === 0);
console.log('even number:', result);
const result2 = numbers.find(num => num > 50);
console.log(result2);
numbers.forEach(number => {
    console.log(number);
});


