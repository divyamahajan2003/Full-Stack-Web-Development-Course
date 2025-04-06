/* Question 1

let arr = [7, 9, 0, -2];
let n = 3;

let ans = arr.slice(0 , n);
console.log(ans);
*/


// Question 2

let arr = [7, 9, 0, -2];
let n = 3;
 
let ans = arr.slice(arr.length-n);
console.log(ans);


/* Question 3
let str = prompt("please enter a string");

if(str.length == 0) {
    console.log("string is empty");
} else {
    console.log("string is not empty");
}
*/


/* Question 4

let str = "ApNaCoLlEgE";
let idx = 3;

if(str[idx] == str[idx].toLowerCase()) {
    console.log("charachter is lowercase");
} else {
    console.log("charachter is not lowercase");
} */



// Question 5

let str = prompt("please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);



// Question 6
let array = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if(array.indexOf(item) != -1) {
    console.log("element exists in array");
} else {
    console.log("element doesn't exist in array");
}