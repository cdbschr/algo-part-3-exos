/*
 * Pour chaque nombre compris entre min et max
 * Si le nombre est divisible par 3 => Fizz
 * Si le nombre est divisible par 5 =>  Buzz
 * Si le nombre est divisible par 3 et par 5 => FizzBuzz
 * Sinon retourner le nombre
 *
 * Voir le fichier de tests associé (spec/fizzBuzzSpec.js)
 */
function fizzBuzz(min, max) {
    let array = [];

    while (min < max) {
        if (min % 15 === 0) {
            array.push("FizzBuzz");
        } else if (min % 3 === 0) { 
            array.push("Fizz");
        } else if (min % 5 === 0) {
            array.push("Buzz");
        }
        else array.push(min);

        ++min;
    }
    return array;
}

export { fizzBuzz };