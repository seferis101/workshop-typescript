// Type any can take anything (type erasure)
var text: any = "Hello World!";
console.log("text=" + text);
text = 5;
console.log("text=" + text + "\n");

function sum(a: number, b: number): number {
    return a + b;
}

// Different ways of defining a function
let sumAlt; // undefined
console.log("Init sumAlt=" + sumAlt);

sumAlt = function (a: number, b: number): number { return a + b; }
console.log("1 sumAlt(2, 3)=" + sumAlt(2, 3));

sumAlt = (a: number, b: number): number => { return a + b; }
console.log("2 sumAlt(2, 3)=" + sumAlt(2, 3));

sumAlt = (a: number, b: number) => { a + b; } // undefined
console.log("3 sumAlt(2, 3)=" + sumAlt(2, 3));

sumAlt = (a: number, b: number) =>  a + b
console.log("4 sumAlt(2, 3)=" + sumAlt(2, 3) + "\n");

// Problem: Override of this
function Person() {
    this.name = "Max";
    this.sayHello = function() {
        console.log(this.name);
    }
}

let p1 = new Person();
p1.sayHello();

let sayHelloFn = p1.sayHello;
sayHelloFn(); // returns undefined because no context for call of sayHello and this is undefined
console.log("\n");

// Problem: Override of this - Solution 1:
function PersonSaveThis() {
    let _this = this;

    this.name = "Moritz";
    this.sayHello = function() {
        console.log(_this.name);
    }
}

let p1 = new PersonSaveThis();
p1.sayHello();

let sayHelloFn = p1.sayHello;
sayHelloFn(); // returns undefined because no context for call of sayHello and this is undefined
console.log("\n");

// Problem: Override of this - Solution 2:
function PersonFatArrow() {
    let _this = this;

    this.name = "Moritz";
    this.sayHello = () => {
        console.log(_this.name);
    }
}

var p1 = new PersonFatArrow();
p1.sayHello();

var sayHelloFn = p1.sayHello;
sayHelloFn(); // returns undefined because no context for call of sayHello and this is undefined
console.log("\n");

// Loops in TS
var liste = [1, 2, 3];
for (let i of liste) {
    console.log(i);
}

let listeAlt: number[];
let listeMoreAlt: Array<number>;