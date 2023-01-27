/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */

// Este resultado es ineficiente, complejidad O(2^(1.5*n)) superpolinomial

function Fibonacci(n){
    if(typeof(n) !== typeof(1)){
        throw new TypeError('n must be a number!')
    }

    if(n<=0){
        return 0
    }
    if(n===1){
        return 1
    }
    return Fibonacci(n-2) + Fibonacci(n-1)
}

for(let i=0; i<20; i++){
    console.log(Fibonacci(i))
}