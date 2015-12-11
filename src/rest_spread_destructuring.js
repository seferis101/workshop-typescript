var fn = function (a, b) {
    var derRest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        derRest[_i - 2] = arguments[_i];
    }
    console.log(derRest);
};
var a = 1;
var b = 2;
var swap = function () { return (_a = [b, a], a = _a[0], b = _a[1], _a); var _a; };
swap();
console.log();
//# sourceMappingURL=rest_spread_destructuring.js.map