enum Hochschule {
    UNI,
    FH,
    BA
}

let printEnumEntry = (entry: Hochschule) => console.log(Hochschule[entry]);

printEnumEntry(Hochschule.UNI);
printEnumEntry(Hochschule.FH);
