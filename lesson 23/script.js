function showMessage(){
    alert("This is inside the function");
}
//showMessage()
function shuma(nr1, nr2){
    return nr1+nr2;
}
console.log(shuma(4,5));


//Detyra1 kthe prej Farenheit ne Celsius
function celsius(f){
    return (5/9) * (f-32);
}
console.log(celsius(113));

var arrowFunction=()=>alert("Hello World");
//arrowFunction();

var pershendetje = emri => alert(`Miredita ${emri}`)
//pershendetje("Valjeta")

function dsFunction(){//localVar mundet mu perdore vetem brenda funksionit
    var localVar="Digital School"
    console.log(localVar)
}
dsFunction();
//alert(localVar); -> error

function SyprinaTekendeshi(baza, lartesia){
    return 0.5*baza*lartesia;
}
console.log(SyprinaTekendeshi(2,5))