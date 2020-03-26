// Recupero i km da percorrere

var distanza = parseInt(prompt('Quanti km dovrai percorrere ?'));
console.log(distanza);

// recupero gli anni del cliente

var infoPasseggero = parseInt(prompt('Quanti anni hai ?'));
console.log(infoPasseggero);

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
    console.log("E stato applicato uno sconto del 20% per gli under 18 " + scontoFinale20);

} else if (infoPasseggero >= 65) {
    console.log("E stato applicato uno sconto del 40% per gli over 65 " + scontoFinale40);

} else {
    console.log("Pagherai il prezzo intero del biglietto " + prezzoInt);
}