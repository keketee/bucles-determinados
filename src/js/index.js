// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';

//bucles determinados ejemplos:

//FORMA NORMAL

// let counter = 0;

// const pseudoBlucle = () => {
//   if (counter <= 10) {
//     console.log(counter);
//     counter++;
//   }
// };

// pseudoBlucle()
// pseudoBlucle()
// pseudoBlucle()
// pseudoBlucle()
// pseudoBlucle()
// pseudoBlucle()
// pseudoBlucle()
// pseudoBlucle()
// pseudoBlucle()
// pseudoBlucle()

//FORMA BUCLE

// for (let counter = 0; counter <= 100; counter++) {
//   console.log(counter);
// }

//EJEMPLO PARA PONER LOS NOMBRE POR ORDEN

// const names = ['keko', 'cristina', 'celia', 'andrea'];

// for (let counter = 0; counter < names.length; counter++) {
//   console.log(names[counter]);
// }

// EJEMPLO PARA PONER LOS NOMBRES AL REVES

// for (let counter = names.length - 1; counter > 0; counter--) {
//   console.log(name[counter]);
// }

//BUCLE PARA QUE SE PONGA DE PRINCIPIO A FIN

// for( const name of names){
//     console.log(name)
// }

//EJERCICIOS:
// 1 - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const cuentaAtras = number => {
  for (let counter = number; counter >= 0; counter--) {
    console.log(counter);
  }
};

cuentaAtras(8);

//2 - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
