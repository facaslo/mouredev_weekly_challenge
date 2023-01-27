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

// Solucionandolo mediante un array
function Fibonacci(n){

    array = [0]
    console.log(array[0])

    if(n>=2){
        array[1] = 1
        console.log(array[1])
        for(let i=2; i<=n; i++){
            array[i] = array[i-2] + array[i-1]
            console.log(array[i])
        }
    }    
}

Fibonacci(50)