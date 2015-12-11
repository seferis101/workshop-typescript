var Vorlesung;
(function (Vorlesung) {
    Vorlesung.abschluss = "Master";
    var note = 1.7;
    Vorlesung.name = "Lorenz";
    var today = 2015;
    var birth = 1982;
    Vorlesung.age = today - birth;
})(Vorlesung || (Vorlesung = {}));
console.log(Vorlesung.name);
console.log(Vorlesung.age);
//# sourceMappingURL=namespaces.js.map