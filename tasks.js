/* problem : 1 object with 6 parameter. string, boolean, number,function, array,object
(method access any object property and return it)  */
const shoppingCart = {
    name: 'IDB',
    money: 50000,
    doMath: function () {
        return this.name + ' is the best popular market'
    },
    item: ['mouse', 'keyboard', 'laptop', 'phone'],
    moneycost: function (itemAmount, tips) {
        this.money = this.money - itemAmount - tips;
        return this.money;
    },
    phone: {
        name: 'samsung',
        color: 'black',
        process: '16GB',
        price: 20000
    }

}
const output = shoppingCart.doMath();
console.log(output);
const cost = shoppingCart.moneycost(25300, 400);
console.log(cost);

// problem:2 template string 
const templateString = `I am a web developer. I love to code. I love to eat biryani.`;
console.log(templateString);


// problem:3 arrow function
// 3.1:
const numbers = (num) => num / 17;
const divided = numbers(75);
console.log(divided);
// 3.2:
const number = (num1, num2) => {
    const sum = num1 + num2;
    if (sum % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const result = number(7, 5);
console.log(result);
// 3.3:multiline arrow function
const multiline = (a, b, c, d, e) => {
    const isSum = a + b + c + d + e;
    const square = isSum * isSum;
    return square;
}
const result2 = multiline(11, 33, 44, 8, 22);
console.log(result2);

