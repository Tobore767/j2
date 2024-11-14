var name = 'Leo';
console.log(name);

let number = 12;
let int = 59;
let float  = 2.9;
var isMan = Boolean;
let ismarried = false;
let isingle = true;
//two types of data types primitive and not non primitive
var info =  ['Leo', 9, true, null];

const user ={
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe@example.com',
    password: 'securePassword123',
    phone: '+1234567890',
    address: {
        street: '123 Main St',
        city: 'Lagos',
        state: 'Lagos',
        postalCode: '00001',
        country: 'Nigeria'
    },
    dateodBirth: '1990-01-01',
    isActive: true,
    roles: ['user', 'admin'],
    lastLogin: '2024-10-14T10:30:00Z'
};





console.log(number,int,float);
console.log(`this is ${name} and this is ${int}`);
console.log(`this is ${name} Is he married? ${ismarried}`);
console.log(info);
console.log(info['0'])
console.log(info['1'])
console.log(info['2'])
console.log(info['3'])