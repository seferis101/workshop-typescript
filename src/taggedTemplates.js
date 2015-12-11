function upperArgs(literals) {
    var vars = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        vars[_i - 1] = arguments[_i];
    }
    console.log(literals);
    console.log(vars);
    var result = "";
    for (var i = 0; i < literals.length; i++) {
        var lit = literals[i];
        result += lit;
        result += (vars[i] || "").toString().toUpperCase();
    }
    return result;
}
var first_name = "Lorenz";
var surname = "Büttner";
var result = (_a = ["Hallo ", " ", "!"], _a.raw = ["Hallo ", " ", "!"], upperArgs(_a, first_name, surname));
console.log("result=" + result);
var _a;
