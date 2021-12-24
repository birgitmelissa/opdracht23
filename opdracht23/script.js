const bigger = function(getal) {
    const number = getal;
    if (number > 100) {
    return true;
    } 
   return false;
}

const result = bigger (101);
console.log(result);

//Dit een een functie die iets doet

const bouncerBot = function(leeftijd, hoeveelheid) {
    const age = leeftijd;
    const druk = hoeveelheid;
    if (age < 18) {
    return "This is a club for adults";
    } else if (druk > 1000) {
        return "It's too busy now, come back later"
    }
   return "Come on in";
}

const binnen = bouncerBot (age = 17, druk = 999);
console.log(binnen);

//Dit is ook een functie die iets doet

const average = function(nr1, nr2, nr3, nr4, nr5){
    const som = (nr1 + nr2 + nr3 + nr4 + nr5) / 5;
    return som;
};

const gemiddelde = average(5, 2, 6, 7, 8);

console.log(Math.round(gemiddelde))

//Dit is een functie die iets pruduceert