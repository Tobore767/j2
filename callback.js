// Definition: A callback function is a function passed into another function as an arguement,which is then invoked inside the outer function to complete some kind of routine or action.
//Function definition with a callback parameter.

function sayHello(name, callback){
    console.log(`Hello ${name}`)
    callback();
}

function sayGoodbye(){
    console.log('Welcome to my app')
}

sayHello('Leo', sayGoodbye);


const sayHi= function(name, callback){
    console.log(`Hi ${name}`)
    callback();
}



const greet = (name, firstCallback, secondCallback) => {
    console.log(`Hello  ${name}`)
    firstCallback()
    secondCallback
}


const welcomeMesage = () =>{
    console.log('welcome to our app')
}

const offerservice = () => {
    console.log('pls how can we help you?')
}

greetUser('Leo', welcomeMesage, offerservice)

