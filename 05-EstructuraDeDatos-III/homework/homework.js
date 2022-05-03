'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.insert = function (value) {
  let nodo = new BinarySearchTree(value)
  if (value > this.value) {  // Si el value es mayor a "this.value" el nuevo nodo va a la derecha.

    if (this.right !== null) {
      // tiene hijo derecho.
      this.right.insert(value);

    } else {
      // no tiene hijo derecho.
      this.right = nodo;
    }
  } else {  // Si el value es menor a "this.value" el nuevo nodo va a la izquierda.

    // el nuevo nodo va a la izquierda.
    if (this.left !== null) {
      // tiene hijo izquierdo.
      this.left.insert(value);

    } else {
      // no tiene hijo izquierdo.
      this.left = nodo;
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) { return true }

  if (this.left) {
    if (this.left.contains(value)) {
      return true
    }
  }
  if (this.right) {
    if (this.right.contains(value)) {
      return true
    }
  }
  return false
};

BinarySearchTree.prototype.depthFirstForEach = function (fn, order) {
  //InOrder
  /**
      * recorre primero toda la rama izquierda
      * de izquierda al centro.
      * Luego imprime la raíz, y finalmente
      * recorre la rama derecha, del centro hacia
      * la derecha.
      */
  if (order == "in-order" || order == undefined) {
    if (this.left !== null) {
      this.left.depthFirstForEach(fn)
    }
    fn(this.value)
    if (this.right !== null) {
      this.right.depthFirstForEach(fn)
    }
  }
  //PreOrder
  /**
      * Imprime primero la raíz, luego
      * toda la rama izquierda de izquierda al centro.
      * y finalmente recorre la rama derecha,
      * del centro hacia la derecha.
      */
  if (order == "pre-order") {
    fn(this.value)
    if (this.left !== null) {
      this.left.depthFirstForEach(fn, order)
    }
    if (this.right !== null) {
      this.right.depthFirstForEach(fn, order)
    }
  }
  //PostOrder
  /**
      * Recorre el árbol de izquierda hacia el centro.
      * Luego del centro hacia la derecha, y finalmente
      * imprime la raíz.
      */
  if (order == "post-order") {
    if (this.left !== null) {
      this.left.depthFirstForEach(fn, order)
    }
    if (this.right !== null) {
      this.right.depthFirstForEach(fn, order)
    }
    fn(this.value)
  }

}

BinarySearchTree.prototype.breadthFirstForEach = function (fn, queue) {
  if (queue == null) var queue = []

  fn(this.value)

  if (this.left) queue.push(this.left)
  if (this.right) queue.push(this.right)

  if (queue.length > 0) {
    queue.shift().breadthFirstForEach(fn, queue)
  }

}

BinarySearchTree.prototype.size = function () {
  var suma = 1
  if (this.left) { suma = suma + this.left.size() }
  if (this.right) { suma = suma + this.right.size() }
  return suma
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
