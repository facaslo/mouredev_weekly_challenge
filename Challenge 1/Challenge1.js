/*
    * Reto #1
    * ¿ES UN ANAGRAMA?
    * Fecha publicación enunciado: 03/01/22
    * Fecha publicación resolución: 10/01/22
    * Dificultad: MEDIA
    *
    * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
    * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
    * NO hace falta comprobar que ambas palabras existan.
    * Dos palabras exactamente iguales no son anagrama. 
 */

function isAnagram(string1, string2){
    if(typeof(string1) !== 'string' || typeof(string2) !== 'string')
        throw new TypeError('Incorrect type, both values must be strings!')
    
    string1 = string1.toLowerCase().trim()
    string2 = string2.toLowerCase().trim()
    string1 = string1.split(' ').join('')
    string2 = string2.split(' ').join('')    
    
    if(string1===string2 || string1.length != string2.length){
        return false
    }

    let string1ElementCount = {}
    let string2ElementCount = {}
    for(char1 in string1){
        if(char1 in Object.keys(string1ElementCount)){
            string1ElementCount[char1] += 1
            continue
        }
        string1ElementCount[char1] = 1
    }
    for(char2 in string2){
        if(char1 in Object.keys(string2ElementCount)){
            string2ElementCount[char2] += 1
            continue
        }
        string2ElementCount[char2] = 1
    }
    
    return JSON.stringify(string1ElementCount) === JSON.stringify(string2ElementCount)
}   

// Test
console.log(isAnagram('Clint Eastwood  ', 'Old west action'))