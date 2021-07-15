export function checkAdjProperties(grammarObj) {
    const testObj = {
        "masculineSinIndef": "ikke",
        "masculineSinDef": "ikka",
        "masculinePlIndef": "ikke",
        "masculinePlDef": "ikka",
        "feminineSinIndef": "ikke",
        "feminineSinDef": "ikka",
        "femininePlIndef": "ikke",
        "femininePlDef": "ikka",
        "neuterSinIndef": "eikke",
        "neuterSinDef": "eikka",
        "neuterPlIndef": "ikket",
        "neuterPlDef": "ikkete",
        "comparative": "ikketa",
        "indefSuperlative": "ikketan",
        "defSuperlative": "ikketane",
        "_id": "420"
    }
    let origKeys = Object.keys(grammarObj).sort();
    let testKeys = Object.keys(testObj).sort();
    return JSON.stringify(origKeys) === JSON.stringify(testKeys);
}

export function checkNounProperties(grammarObj) {
    const testObj = {
        "countable": "true",
        "gender": "masculine",
        "singularIndefinite": "en hund",
        "singularDefinite": "hunden",
        "pluralIndefinite": "hunder",
        "pluralDefinite": "hundene",
        "_id": "420"
    }
    let origKeys = Object.keys(grammarObj).sort();
    let testKeys = Object.keys(testObj).sort();
    return JSON.stringify(origKeys) === JSON.stringify(testKeys);
}

export function checkVerbProperties(grammarObj) {
    const testObj = {
        "infinitive": "faef",
        "present": "aefaf",
        "past": "efffe",
        "future": "eea",
        "conditional": "fafa",
        "imperative": "fafaef",
        "presentPerfect": "va faaan",
        "pastPerfect": "fafeee",
        "futurePerfect": "fafaa",
        "conditionalPerfect": "fff",
        "_id": "420"
    }
    let origKeys = Object.keys(grammarObj).sort();
    let testKeys = Object.keys(testObj).sort();
    return JSON.stringify(origKeys) === JSON.stringify(testKeys);
}