'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
  this.length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  var node = new Node(value);
  var current = this.head

  if (!current) {
    this.head = node;
    this.length++;
    return node;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this.length++;
  return node;
}

LinkedList.prototype.remove = function () {
  if (!this.head) { return false }
  if (this.head.next === null) {
    var val = this.head
    this.head = null
    return val.value
  }
  else {
    var current = this.head
    while (current.next.next) {
      current = current.next
    }
    var val = current.next
    current.next = null
    return val.value
  }
}
LinkedList.prototype.search = function (param) {
  if (!this.head) { return null }
  var fun;
  if (typeof param !== "function") {
    fun = function (busc) {
      return param === busc
    }
  }
  else {
    fun = param
  }

  var current = this.head
  while (current) {
    if (fun(current.value)) {
      return current.value
    }
    else {
      current = current.next
    }
  }
  return null
}


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35
  this.contenedores = []

  HashTable.prototype.hash = function (valor) {
    var suma = 0;
    for (let i = 0; i < valor.length; i++) {
      suma = suma + valor.charCodeAt(i)
    }
    return suma % this.numBuckets
  };

  HashTable.prototype.get = function (key) {
    var p = this.hash(key)
    return this.contenedores[p] ? this.contenedores[p][key] : undefined
  }
  HashTable.prototype.set = function (key, valor) {
    if(typeof key != "string") {throw new TypeError ("Keys must be strings")}
    var p = this.hash(key)
    if (!this.contenedores[p]) {
      this.contenedores[p] = {}
    }
    this.contenedores[p][key] = valor
  }

  HashTable.prototype.hasKey = function (key) {
   var p = this.hash(key)
   return this.contenedores[p].hasOwnProperty(key)
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
