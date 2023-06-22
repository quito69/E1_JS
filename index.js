/* 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. */

const parImpar = (numero) => {
    if (numero % 2 == 0) {
        console.log(`El Número ${numero} es par`);
    } else {
        console.log(`El Número ${numero} es impar`);
    }
}

parImpar(88);
parImpar(55);


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor,
//  y si ninguno lo es, indicar por consola que son iguales.

const mayorMenorIgual = (n1, n2) => {
    if (n1 == n2) {
        console.log(`Los números son iguales`)
    } else if (n1 > n2) {
        console.log(`el número ${n1} es mayor a ${n2}`)
    } else {
        console.log(`el número ${n1} es menor a ${n2}`)
    }
}

mayorMenorIgual(2,2);
mayorMenorIgual(4,2);
mayorMenorIgual(2,4);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiploCinco = (numero) => {
    if (numero % 5 == 0) {
        console.log(`El Número ${numero} es multiplo de 5`);
    } else {
        console.log(`El Número ${numero} no es multiplo de 5`);
    }
}

multiploCinco(88);
multiploCinco(55);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const rango = (numero) => {
    for (let i=0; i<= numero; i++) {
        console.log(`${i}`);
    }
}

rango(7);

// 5 - Crear una función que reciba una palabra y un número por parámetro
// e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const palabraNumero = (palabra, numero) => {
    for (let i=1; i <= numero; i++) {
        console.log(`${palabra} + ${i}`);
    }
}

palabraNumero('camión', 6);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const f_array = (parametro) => {
    console.log(`Valores del array = ${parametro.length}`);
    for (let i=0; i < parametro.length; i++) {
        console.log(parametro[i])
    }
}

let array = [1, 3, 'Pepe', '2548714', '1155668877']
f_array(array);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array,
// menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const f2_array = (parametro) => {
    for (let i = 0; i < parametro.length; i++) { // puedo usar el numero 10 en la condicion ya que lo detalla el enunciado.
        if (i === 4){
            continue;
        } else {
            console.log(`${parametro[i]}`);
       }
    }
}

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
f2_array(array2);

// 8 - Crea una función que reciba un array de números y un número por parámetro
//     e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const f3_array = (parametro, numero) => {
    for (let i=0; i < parametro.length; i++) {
        console.log(`El Resultado de ${parametro[i]} x ${numero} es ${parametro[i]*numero}`);
    }
}

let array3 = [1, 2, 3];
f3_array(array3, 4);