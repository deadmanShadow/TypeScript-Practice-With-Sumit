const country = "Bangladesh"
console.log(country);


let playerName = "Mashrafi";
let age = 34;

console.log(playerName);

console.log(age);


function multiply(a: number, b: number) {
    return a * b
}

console.log(multiply(3, 4));


// array 

let fruits = ['apple', 'banana', 'orange'];
let fruits2 = [];

fruits.push();
fruits2.push(3);

let mixed = ['apple', 3, true, {}];

mixed.push(4);
mixed.push("raihan");


// object
let person = {
    name: "Mashrafi",
    age: 34,
    isCaptain: true,
    country: "Bangladesh"
}

person.name = "Ashraful";
person.country = "India"

// let a : string;
// let b : number;


// a = 'shamil';

// b = '34';

// array


let a: string[] = [];

a.push('Shamil');
let b: number[] = [];

a.push('40');


let p: (string | number)[] = [];

// object

let c: {
    name: string,
    age: number,
    adult: boolean
}


c = {
    name: 'shamil',
    age: 24,
    adult: true
}


let d: object;

d = [1, 1, 887, 566];
