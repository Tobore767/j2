//Closure is a feature in javascript where an innner function has access to th vairable  of its outer function, even after the outer fnction has finished executing.
function outerFunction(){
    const outerVariable = 'I am from outer Function';
    function innerFunction(){
        console.log(outerVariable)
    }
    return innerFunction
}

const closureFunction = outerFunction();
closureFunction;


function createCounter(){
    let counter = 5;

     return function(){
        counter++
        return counter ;
    };
    
}



const counterFunction = createCounter();
console.log(counterFunction())
console.log(counterFunction());


// function createCounter(){
//     let x = 10;

//     return function(){
//         x--
//         return x;
//     };
// }

// console.log('hello')
