var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["\u2660", "\u2663", "\u2665" ,"\u2666"]


let chooseCard = () => {
 let  allValues= Math.floor(Math.random() * values.length);
 let allSuits = Math.floor(Math.random() * suits.length);

 

 document.getElementById("middle").innerHTML =  values[allValues];
 document.getElementById("top-suit").innerHTML =  suits[allSuits];
 document.getElementById("bottom-suit").innerHTML =  suits[allSuits];
};

console.log(chooseCard(document.getElementById("middle").innerHTML));
console.log(chooseCard(document.getElementById("to[p-suit").innerHTML));
console.log(chooseCard(document.getElementById("bottom-suit").innerHTML));
				

