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

// 2 - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const tenNumbers = numbers => {
  let total = 0;

  for (let counter = 0; counter < numbers.length; counter++) {
    total = total + numbers[counter];
  }
  console.log(total);
};

tenNumbers([4, 2, 5, 8, 4, 6, 7, 5, 4, 4]);
// con for of seria:
// for(const number of numbers){
// total = total + number
// }

// 3 - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

//   4 x 0 = 0
//   4 x 1 = 4
//   4 x 2 = 8
//   4 x 3 = 12
//   4 x 4 = 16
//   4 x 5 = 20
//   4 x 6 = 24
//   4 x 7 = 28
//   4 x 8 = 32
//   4 x 9 = 36
//   4 x 10 = 40

const multiplicar = number => {
  for (let counter = 0; counter <= 10; counter++) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};

multiplicar(5);

//  4 - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

//   4 x 10 = 40
//   4 x 9 = 36
//   4 x 8 = 32
//   4 x 7 = 28
//   4 x 6 = 24
//   4 x 5 = 20
//   4 x 4 = 16
//   4 x 3 = 12
//   4 x 2 = 8
//   4 x 1 = 4
//   4 x 0 = 0

const multiplication = number => {
  for (let counter = 10; counter >= 0; counter--) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};

multiplication(7);

//  5 - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

//   - "naciste en el año X"
//   - "En el año X cumpliste 1 año"
//   - "En el año X cumpliste 2 años"
//   - "En el año X cumpliste 3 años"
//     ....

const ageAndYear = (year, age) => {
  console.log(`naciste en el año ${year - age}`);

  for (let counter = 1; counter <= 33; counter++) {
    if (counter === 1) {
      console.log(`En el año ${counter + (year - age)} cumpliste ${counter} año`);
    } else {
      console.log(`En el año ${counter + (year - age)} cumpliste ${counter} años`);
    }
  }
};

ageAndYear(2024, 33);

// 6 - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const twoNumbers = (number1, number2) => {
  let start;
  let end;

  if (number1 < number2) {
    start = number1;
    end = number2;
  } else {
    start = number2;
    end = number1;
  }
  for (let counter = start; counter <= end; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};

twoNumbers(2, 10);

// 7- Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const twoArrays = () => {
  const array1 = [];
  const array2 = [];

  for (let counter = 0; counter <= 5; counter++) {
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    array1.push(number1);
    array2.push(number2);
  }

  if (number1.include(array1)) {
  }
};

twoArrays();
