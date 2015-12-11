// Type any can take anything (type erasure)
var text = "Hello World!";
console.log("text=" + text);
text = 5;
console.log("text=" + text + "\n");
function sum(a, b) {
    return a + b;
}
// Different ways of defining a function
var sumAlt; // undefined
console.log("Init sumAlt=" + sumAlt);
sumAlt = function (a, b) { return a + b; };
console.log("1 sumAlt(2, 3)=" + sumAlt(2, 3));
sumAlt = function (a, b) { return a + b; };
console.log("2 sumAlt(2, 3)=" + sumAlt(2, 3));
sumAlt = function (a, b) { a + b; }; // undefined
console.log("3 sumAlt(2, 3)=" + sumAlt(2, 3));
sumAlt = function (a, b) { return a + b; };
console.log("4 sumAlt(2, 3)=" + sumAlt(2, 3) + "\n");
// Problem: Override of this
function Person() {
    this.name = "Max";
    this.sayHello = function () {
        console.log(this.name);
    };
}
var p1 = new Person();
p1.sayHello();
var sayHelloFn = p1.sayHello;
sayHelloFn(); // returns undefined because no context for call of sayHello and this is undefined
console.log("\n");
// Problem: Override of this - Solution 1:
function PersonSaveThis() {
    var _this = this;
    this.name = "Moritz";
    this.sayHello = function () {
        console.log(_this.name);
    };
}
var p1 = new PersonSaveThis();
p1.sayHello();
var sayHelloFn = p1.sayHello;
sayHelloFn(); // returns undefined because no context for call of sayHello and this is undefined
console.log("\n");
// Problem: Override of this - Solution 2:
function PersonFatArrow() {
    var _this = this;
    this.name = "Moritz";
    this.sayHello = function () {
        console.log(_this.name);
    };
}
var p1 = new PersonFatArrow();
p1.sayHello();
var sayHelloFn = p1.sayHello;
sayHelloFn(); // returns undefined because no context for call of sayHello and this is undefined
console.log("\n");
// Loops in TS
var liste = [1, 2, 3];
for (var _i = 0; _i < liste.length; _i++) {
    var i = liste[_i];
    console.log(i);
}
var listeAlt;
var listeMoreAlt;
//# sourceMappingURL=hello.js.map