function sayHello(name){
    console.log('Hello ' + name);
}

//sayHello('Vives');

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Geef je geboortedatum in (JJJJMMDD): ', function (geboortedatum) {
    groepen(geboortedatum);
    readline.close();
});

function groepen(geboortedatum){
    let groep = geboortedatum % 7+1
    console.log('Je bent toegewezen aan groep ' + groep);
}
