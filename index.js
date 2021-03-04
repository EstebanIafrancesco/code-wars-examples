// Serie de funciones y métodos propuestos por code-wars
// 1.
// function toCamelCase(str) {
//   let partes = str.split("-");
//   console.log(partes);
//   let salida = "";
//   for (let i = 0; i < partes.length; i++) {
//     let camelludo = partes[i].charAt(0).toUpperCase();
//     console.log(camelludo);
//     salida += partes[i];
//   }
//   console.log(salida);
// }
// toCamelCase("hola-como-estas-mi-perrito");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// 2. Summation
// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.
// Sol:
// function numbSum(a) {
//   let sum = 0;
//   for (i = a; i >= 1; i--) {
//     sum += i;
//   }
//   console.log('La suma de '+ a + ' y sus números inferiores es: ' + sum);
// }
// numbSum(55);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// 3. Your task is to make a function that can take any non-negative integer
//    as an argument and return it with its digits in descending order. Essentially,
//    rearrange the digits to create the highest possible number.

function greatestNumerFrom(num) {
  // volverlo cadena
  numString = String(num);
  // armar arreglo según tamanio
  let arrNum = [];
  for (let i = 0; i < numString.length; i++) {
    // volver cada elemento del arreglo un número
    arrNum[i] = parseInt(numString[i]);
  }
  // ordenar de mayor a menor
  let max = Math.max(...arrNum);
  let arrMax = [];
  for (let i = max; i >= 0; i--) {
    for (let j = 0; j < arrNum.length; j++) {
      if (arrNum[j] == i) {
        arrMax.push(String(i));
      }
    }
  }
  // imprimir valor
  let numMax = '';
  for (let i = 0; i < arrMax.length; i++) {
    numMax += arrMax[i];
  }

  console.log(
    "El número más grande que puedes construir con " + num + " es >> " + numMax
  );
}
greatestNumerFrom(78456321555);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
