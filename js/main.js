// Recupero i km da percorrere

var distanza = parseInt(prompt('Quanti km dovrai percorrere ?'));
console.log("Percorrerai " + distanza + " km");

// recupero gli anni del cliente

var infoPasseggero = parseInt(prompt('Quanti anni hai ?'));
console.log("Hai " + infoPasseggero + " anni");

// costo del biglietto

var costo = 0.21;

var prezzoInt = distanza * costo;

// 20% di scoto

var sconto20 = prezzoInt * 20 / 100;

var scontoFinale20 = prezzoInt - sconto20;

// 40% di sconto

var sconto40 = prezzoInt * 4 / 100;

var scontoFinale40 = prezzoInt - sconto40;


// condizione per lo sconto

if (infoPasseggero < 18) {
    document.getElementById('acquisto').innerHTML = "E' stato applicato uno sconto del 20% per gli under 18, pagherai " + scontoFinale20.toFixed(2) + " $";

} else if (infoPasseggero >= 65) {
    document.getElementById('acquisto').innerHTML = "E' stato applicato uno sconto del 40% per gli over 65, pagherai " + scontoFinale20.toFixed(2) + " $";

} else {
    document.getElementById('acquisto').innerHTML = "Non e' stato possibile applicare sconti al tuo biglietto, pagherai " + scontoFinale20.toFixed(2) + " $";
}