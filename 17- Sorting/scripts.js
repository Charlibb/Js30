const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

//replace the words "a" "an" "the" and remove the spaces with trim()
function strip (bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}
const sortedbands = bands.sort((a, b) => strip(a) > strip(b)? 1 : -1);

console.log(sortedbands);

document.querySelector('#bands').innerHTML = sortedbands.map(band => `<li>${band}</li>`).join('');
//join is used to remove the "," from the array


// const sortedBands = bands.sort(function(a, b) {   // this anonymous function is the compareFunction

//     return strip(a) > strip(b)? 1 : -1;
//    /*  if (strip(a) > strip(b)  ) {    // now the entire values of a & b are compared
//         return -1;
//     };
//     else {
//         return 1;
//     };
//     // a must be equal to b, no change to index
//     return 0; */

// });











/* const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); */ // why output is [1, 100000, 21, 30, 4]?  because  the default behavior will compare only the FIRST ELEMENT of the string (first letter only) or number (first digit encountered).

/* array1.sort(function(a, b) {   // this anonymous function is the compareFunction
    if (a < b) {    // now the entire values of a & b are compared
        return -1;
    };
    if (a > b) {
        return 1;
    };
    // a must be equal to b, no change to index
    return 0;
});
console.log("and now with function", array1) // now the output is [1, 4, 21, 30, 100000] */