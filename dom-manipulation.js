const button3 =document.getElementById('mybutton');

button3.addEventListener('click', function (e){
    alert('hello world!')
});


const fruits=['Apple', 'Banana', 'Cherry'];
fruits.push('mango')//add to the end
console.log(fruits);

fruits.unshift('Elderberry')//add to the begining
console.log(fruits);

fruits.pop();//remove from the end
console.log(fruits);

fruits.shift();//remove from the begining
console.log(fruits);

fruits.splice(1,1);//removing froma specific position
console.log(fruits);

fruits.splice(1,0,'plantain');
console.log(fruits);

let array = [1,2,3,4,5];
array.splice(2,3);
console.log(array);

//iterating over Arrays
//introduce diffrent ways to  loop through arrays

//Using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//using forEacch
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Common Array Method 
// Explain some useful array methods like map, filter, filter, reduce, find,

//map
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits);


//filter
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);

//find
let foundFruit = fruits.find(fruit => fruit ==='Apple');
console.log(foundFruit);

//Combning Arrays
//Show how to concatenate arrays using concat.
let moreFruits = ['Fig', 'Grape'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//Sorting Array
//Explain how to sort arrays with sort
let sortedFruits = allFruits.sort();
console.log(sortedFruits);

//Reversi Arrays
//Show how to reverse arrays with reverse
let reversedFruits = allFruits.reverse();
console.log(reversedFruits);

//Original Array
const numbers2 = [1, 2, 3, 4, 5];

//Using map to create a new array with each element doubled
const doubledNumbers = numbers2.map(number => number * 2);
console.log(doubledNumbers);

const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35}
];

//Using map to create a nw array with just the names of the people
const names = people.map(person => person.name);
console.log(names);

const ark =[
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35}
];
const age = ark.map(person => person.age);
console.log(age)