'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }

  var izquierda = [];
  var derecha = [];
  var pivote = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivote) {
      izquierda.push(array[i]);
    } else {
      derecha.push(array[i]);
    }
  }
  return quickSort(izquierda).concat(pivote, quickSort(derecha));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }

  var medio = Math.floor(array.length / 2);
  var izquierda = array.slice(0, medio);
  var derecha = array.slice(medio);

  derecha = mergeSort(derecha);
  izquierda = mergeSort(izquierda);

  var arreglo = [];

  while (izquierda.length && derecha.length) {
    if (izquierda[0] < derecha[0]) {
      arreglo.push(izquierda.shift());
    } else {
      arreglo.push(derecha.shift());
    }
  }
  return arreglo.concat(izquierda, derecha);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
