// arrow function
const multiple = (num) => num * 2
const result = multiple(5);
console.log('multiplication:', result);

// ******
const subtruction = num => num - 2
const total = subtruction(10);
console.log('sub:', total);

// ******
const doMath = (a, b, c) => {
    const firstSum = a + b;
    const secondSum = b + c;
    const multiplicatin = firstSum * secondSum;
    const average = multiplicatin / 2;
    return average;

}
const remaining = doMath(10, 20, 30);
console.log('average:', remaining);

// ******
// template string 
const templateStrng = `I am a web developer. I love to code.I am a good student`;
console.log(templateStrng)