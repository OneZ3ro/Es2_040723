/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
let num1 = 2;
let num2 = 3;

if (num1 > num2) {
  console.log("Il numero più grande è:", num1);
} else {
  console.log("Il numero più grande è:", num2);
}
*/

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*
let mynum = Number(prompt("Inserisci il tuo numero:"));

if (mynum !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}
*/

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
mynum = Number(prompt("Inserisci il tuo numero:"));
if (mynum % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("not divisible per 5");
}
*/

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
num1 = Number(prompt("Inserisci il tuo primo numero:"));
num2 = Number(prompt("Inserisci il tuo secondo numero:"));
let valore = 8;

if (
  num1 === valore ||
  num2 === valore ||
  num1 + num2 === valore ||
  Math.abs(num1 - num2) === valore ||
  Math.abs(num2 - num1) === valore
) {
  console.log("Il valore è:", valore);
} else {
  console.log("Il valore NON è:", valore);
}
*/

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
//primo metodo
let totalShoppingCart = Number(prompt("Inserisci il totale: "));
let totale = totalShoppingCart;

if (totalShoppingCart >= 50) {
  console.log("L'ammontare totale è:", totale);
} else {
  totale = totale + 10;
  console.log("L'ammontare totale è:", totale);
}
*/

//secondo metodo
/*
const carrello = [];
let totalShoppingCart = null;

const item1 = {
  nome: "Monopattino elettrico",
  price: 245.99,
};
const item2 = {
  nome: "Libro di Chimica",
  price: 23.85,
};
const item3 = {
  nome: "Lampada",
  price: 12.95,
};
const item4 = {
  nome: "Pupazzo di John Wick",
  price: 5,
};
const item5 = {
  nome: "Surprise box",
  price: 35.27,
};

let answ1 = prompt(
  `${item1.nome}, prezzo: ${item1.price}€. \nVuoi aggiungerlo al carrello? (Scrivi Si o No)`
).toLowerCase();
let answ2 = prompt(
  `${item2.nome}, prezzo: ${item2.price}€. \nVuoi aggiungerlo al carrello? (Scrivi Si o No)`
).toLowerCase();
let answ3 = prompt(
  `${item3.nome}, prezzo: ${item3.price}€. \nVuoi aggiungerlo al carrello? (Scrivi Si o No)`
).toLowerCase();
let answ4 = prompt(
  `${item4.nome}, prezzo: ${item4.price}€. \nVuoi aggiungerlo al carrello? (Scrivi Si o No)`
).toLowerCase();
let answ5 = prompt(
  `${item5.nome}, prezzo: ${item5.price}€. \nVuoi aggiungerlo al carrello? (Scrivi Si o No)`
).toLowerCase();

if (answ1 === "si" || answ1 === "yes") {
  carrello.push(item1);
  totalShoppingCart = totalShoppingCart + item1.price;
}

if (answ2 === "si" || answ2 === "yes") {
  carrello.push(item2);
  totalShoppingCart = totalShoppingCart + item2.price;
}

if (answ3 === "si" || answ3 === "yes") {
  carrello.push(item3);
  totalShoppingCart = totalShoppingCart + item3.price;
}

if (answ4 === "si" || answ4 === "yes") {
  carrello.push(item4);
  totalShoppingCart = totalShoppingCart + item4.price;
}

if (answ5 === "si" || answ5 === "yes") {
  carrello.push(item5);
  totalShoppingCart = totalShoppingCart + item5.price;
}

if (totalShoppingCart >= 50) {
  console.log(`Il totale è: ${totalShoppingCart}€`);
} else {
  console.log(
    `Il totale senza il costo di spedizione è: ${totalShoppingCart}€`
  );
  totalShoppingCart = totalShoppingCart + 10;
  console.log(`Il totale con il costo di spedizione è: ${totalShoppingCart}€`);
}
*/

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
const carrello = [];
let totalShoppingCart = null;

const item1 = {
  nome: "Monopattino elettrico",
  price: 245.99,
};
const item2 = {
  nome: "Libro di Chimica",
  price: 23.85,
};
const item3 = {
  nome: "Lampada",
  price: 12.95,
};
const item4 = {
  nome: "Pupazzo di John Wick",
  price: 5,
};
const item5 = {
  nome: "Surprise box",
  price: 35.27,
};

alert("BIG NEWS!! TODAY IS BLACK FRIDAY!! EVERYTHING IS 20% OFF!!");

let answ1 = prompt(
  `${item1.nome}. Prezzo pieno: ${item1.price}€\n               OGGI A SOLI ${(
    item1.price * 0.8
  ).toFixed(2)}€!!\nVuoi aggiungerlo al carrello? (Scrivi Si o No)`
).toLowerCase();

let answ2 = prompt(
  `${item2.nome}. Prezzo pieno: ${item2.price}€\n               OGGI A SOLI ${(
    item2.price * 0.8
  ).toFixed(2)}€!!\nVuoi aggiungerlo al carrello? (Scrivi Si o No)`
).toLowerCase();

let answ3 = prompt(
  `${item3.nome}. Prezzo pieno: ${item3.price}€\n               OGGI A SOLI ${(
    item3.price * 0.8
  ).toFixed(2)}€!!\nVuoi aggiungerlo al carrello? (Scrivi Si o No)`
).toLowerCase();

let answ4 = prompt(
  `${item4.nome}. Prezzo pieno: ${item4.price}€\n               OGGI A SOLI ${(
    item4.price * 0.8
  ).toFixed(2)}€!!\nVuoi aggiungerlo al carrello? (Scrivi Si o No)`
).toLowerCase();

let answ5 = prompt(
  `${item5.nome}. Prezzo pieno: ${item5.price}€\n               OGGI A SOLI ${(
    item5.price * 0.8
  ).toFixed(2)}€!!\nVuoi aggiungerlo al carrello? (Scrivi Si o No)`
).toLowerCase();

if (answ1 === "si" || answ1 === "yes") {
  carrello.push(item1);
  totalShoppingCart = totalShoppingCart + item1.price * 0.8;
}

if (answ2 === "si" || answ2 === "yes") {
  carrello.push(item2);
  totalShoppingCart = totalShoppingCart + item2.price * 0.8;
}

if (answ3 === "si" || answ3 === "yes") {
  carrello.push(item3);
  totalShoppingCart = totalShoppingCart + item3.price * 0.8;
}

if (answ4 === "si" || answ4 === "yes") {
  carrello.push(item4);
  totalShoppingCart = totalShoppingCart + item4.price * 0.8;
}

if (answ5 === "si" || answ5 === "yes") {
  carrello.push(item5);
  totalShoppingCart = totalShoppingCart + item5.price * 0.8;
}

if (totalShoppingCart >= 50) {
  console.log(`Il totale è: ${totalShoppingCart.toFixed(2)}€`);
} else {
  console.log(
    `Il totale senza il costo di spedizione è: ${totalShoppingCart.toFixed(2)}€`
  );
  totalShoppingCart = totalShoppingCart + 10;
  console.log(
    `Il totale con il costo di spedizione è: ${totalShoppingCart.toFixed(2)}€`
  );
}
*/

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/**/
const myVar1 = Math.floor(Math.random() * 101);
const myVar2 = Math.floor(Math.random() * 101);
const myVar3 = Math.floor(Math.random() * 101);

/*
if (myVar1 > myVar2 && myVar1 > myVar3) {
  console.log(`${myVar1} è più grande di ${myVar2} e ${myVar3}`);
} else if (myVar2 > myVar1 && myVar2 > myVar3) {
  console.log(`${myVar2} è più grande di ${myVar1} e ${myVar3}`);
} else {
  console.log(`${myVar3} è più grande di ${myVar1} e ${myVar2}`);
}
*/

if (myVar1 > myVar2 && myVar1 > myVar3 && myVar2 > myVar3) {
  console.log(
    `${myVar1} è più grande di ${myVar2} che è più grande di ${myVar3}`
  );
} else if (myVar1 > myVar2 && myVar1 > myVar3 && myVar3 > myVar2) {
  console.log(
    `${myVar1} è più grande di ${myVar3} che è più grande di ${myVar2}`
  );
} else if (myVar2 > myVar1 && myVar2 > myVar3 && myVar1 > myVar3) {
  console.log(
    `${myVar2} è più grande di ${myVar1} che è più grande di ${myVar3}`
  );
} else if (myVar2 > myVar1 && myVar2 > myVar3 && myVar3 > myVar1) {
  console.log(
    `${myVar2} è più grande di ${myVar3} che è più grande di ${myVar1}`
  );
} else if (myVar3 > myVar1 && myVar3 > myVar2 && myVar1 > myVar2) {
  console.log(
    `${myVar3} è più grande di ${myVar1} che è più grande di ${myVar2}`
  );
} else if (myVar3 > myVar1 && myVar3 > myVar2 && myVar2 > myVar1) {
  console.log(
    `${myVar3} è più grande di ${myVar2} che è più grande di ${myVar1}`
  );
}

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//_______________________________________________________________________________________________________________________

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//_______________________________________________________________________________________________________________________
