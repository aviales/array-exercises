// Crear una función que imprima los números divisibles por 3 hasta el número n

function divisbleByThree(n) {
  for (var i = 0; i <= n; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}