
let fn = (a, b, ...derRest) => {
    console.log(derRest);
}

let a = 1;
let b = 2;

let swap = () => [a, b] = [b , a];

swap();
console.log();