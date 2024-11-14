// A loop is a progaming contruct used to repeat a block of code multiple times until a specific condition is met. Loop help automate repetitive tasks.

// for Loop: The for Loop is ideal 


//for (initialization; conditiion; increment) {
    //code to be executed
//}

//initializtion: let i= 0 sets the statrting point.
//condition: i < 5 keeps thw loop running while i is lees than 5.
//Increment: i++ increases i by i after each loop iteration

for (let i = 0; i < 5; i++) {
    console.log(i); //Outputs: 0,1,2,3,4,5
}

const fruits =['apple', 'orange', 'mango', 'grape'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// while loop: The while loop is used when the number of iterations isnt known beforehand. itkeeps running as long as the condition is true.
//while (condition) {
// code to be executed
//}

let i = 0;
while (i < 5) {
    console.log(i);
}

// do...while loop: 


for (let i = 0; i < fruits.length; i++) {
    if (i==4) continue;
    console.log(fruits[i]);
}