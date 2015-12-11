

function upperArgs(literals: string[], ...vars: any[]): string {
    console.log(literals);
    console.log(vars);

    let result = "";
    for (let i = 0; i < literals.length; i++) {
        let lit = literals[i];
        result += lit;
        result += (vars[i] || "").toString().toUpperCase();
    }
    return result;
}

let first_name = "Lorenz";
let surname = "Büttner";
let result: string = upperArgs `Hallo ${first_name} ${surname}!`;
console.log("result=" + result);