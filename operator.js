//Arithmetic Operators
//1, Additions
let sum = 5 + 3;
console.log(sum);

//2, Subtraction
let diffrence = 10-4;
console.log(diffrence);

//3, multiplication
let product = 7*2
console.log(product);

//4, division
let quotient = 20/5;
console.log(quotient);

//5, remainder
let remainder = 10%3;
console.log(remainder);

//6, power
let power = 2**10
console.log(power)


// Asignment operators
//1,Assignmnet
let x = 5;
console.log(x)

//2, additiom assingments
let y = 5;
y +=2;
console.log(y)

//3, subtraction assingments
let z = 10;
z -=2;
console.log(z)


//3, Logical Opertors
//And (&&): Returns true if both operands are true.
let isTrue = (5>3&&3>5); //(false)
//OR (||): Returns true if atvlkeast one operand i true.
let isFalse = (5>3||3>5);//True

//control statement
//1. conditional statement
//If satetment: Executes a block of code if a spcifid condition is true
let a = 4;
if (a>0){
    console.log('a is positive')
};
//if...else statement: Executes a block of code if a specified coondition is true, otherwise another block of code is executed.
if (a>0){
    console.log('a is positive')
}else{
    console.log('a is not positive')
}
//else if statement: Adds  a new condition to test if the  first condition is fasle
if (a>0){
    console.log('a is positive')
}else if(a==0){
    console.log('a is zero')
} else{
    console.log('x is negative')
}

let temperature = 15
if (temperature>15){
    console.log('it is a hot day')
}else if(temperature<15){
    console.log('it is a cold day')
}else{
    console.log('it is a warm day')
}

let fruit = 'apple'
switch (fruit){
    case 'bannana':
        console.log('it is a bannana');
        break;
    case 'apple':
        console.log('it is an apple');
        break;
    case 'orange':
        console.log('it is an orange');
        break;
    default:
        console.log('unknown fruit')
}



