"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let numalreves = num.split("").reverse().join("");
  let suma = 0;
  for (let i = 0; i < numalreves.length; i++) {
    suma = suma + numalreves[i] * 2 ** i;
  }
  return suma;

  // algo
}

function DecimalABinario(num) {
  // tu codigo aca
 let res = new Array(); 
  while (num != 0){
    let resto = num % 2
    num = Math.floor(num/2)
    res.push(resto)
  }
return res.reverse().join("")
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
