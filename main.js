/*

Hello! Thanks for taking the time to complete this exercise.

To start, clone this project (you need to create an account),
and add your answer in your copy. If you don't feel comfortable
with NodeJS, feel free to create a project with the language
of your choice (please copy over these comments).

Once you finish, share the project to matias@kocomo.com

Go coding!!

-------------------------------------------------------

Hola! Gracias por tu tiempo para completar este ejercicio.

Para empezar, clona este proyecto (necesitas crear una cuenta),
y agrega tu respuesta en tu copia. Si no te sientes cómodo
con NodeJS, puedes crear un proyecto con el lenguage que
prefieras (por favor copia estos comentarios).

Cuando termines, comparte este proyecto con matias@kocomo.com

Go coding!!

=======================================================

Words and letters

Given a 'bag' of words and a 'bag' of letters, write a
function that returns the length of the longest word that
can be written using each of the given letters at most
once.

e.g.
Words:
------------------------------
| 'kellogg' 'go'       |
|'hola' 'lego' 'hug'|
| 'kocomo' 'hello' |
------------------------------

Letters:
-----------------------
| 'a' 'h' 'l' 'e' |
|'l' 'o' 'g' 'k'  |
-----------------------

Answer: 5

Explanation:
* 5 is the length of 'hello', logest one that can be written
* 'kellogg' (7) needs two 'g', and there's only one in the letters bag
* 'kocomo' (6) needs a 'c' that is not present in the letters bag
* All other words are shorter than 'hello'

Bonus:
1. What's the Time complexity?
2. What's the Space complexity?

*/


function wordsAndLetters(words, letters) {
    let longgest = 0;

    let lettersObj = {};
    for (let k = 0; k < letters.length; k++) {
        if (lettersObj[letters[k]]) lettersObj[letters[k]]++;
        else lettersObj[letters[k]] = 1;
    }

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > letters.length || words[i].length <= longgest) continue;
        let wordObj = {};
        for (let j = 0; j < words[i].length; j++) {
            if (wordObj[words[i][j]]) wordObj[words[i][j]]++;
            else wordObj[words[i][j]] = 1;
        }
        let aux = true;
        for (let letter in wordObj) {
            if (wordObj[letter] > lettersObj[letter] || !lettersObj[letter]) {
                aux = false;
                break;
            }
        }
        longgest = aux ? words[i].length : longgest;
    }

    return longgest;
}

// Time complexity = O(N^2 + N*M) = O(N*(N + M));
// Space complexity = O(N + M);