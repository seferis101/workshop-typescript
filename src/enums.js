var Hochschule;
(function (Hochschule) {
    Hochschule[Hochschule["UNI"] = 0] = "UNI";
    Hochschule[Hochschule["FH"] = 1] = "FH";
    Hochschule[Hochschule["BA"] = 2] = "BA";
})(Hochschule || (Hochschule = {}));
var printEnumEntry = function (entry) { return console.log(Hochschule[entry]); };
printEnumEntry(Hochschule.UNI);
printEnumEntry(Hochschule.FH);
//# sourceMappingURL=enums.js.map