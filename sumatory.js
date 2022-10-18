// Crear una función que sume todos los números hasta el número n

function sumatory(n) {
  var suma = 0;
  for (var i = 1; i <= n; i++) {
    suma = suma + i;
  }
  return suma;
}

console.log('---')
console.log(sumatory(10))

console.log('---')
console.log(sumatory(6))

console.log('---')
console.log(sumatory(30))