//console.log("1");
//console.log("2");
//console.log("3");
//console.log("4");
//console.log("5");



//for (let i = 1; i <= 5 ; i++) {
//    console.log(i);
//}


/*for (let i = 10; i >= 1 ; i--) {
    console.log(i);
}



for (let i = 10; i >= 1 ; i= i - 3) {
    console.log(i);
}



for (let i = 1; i <= 20; i = i+2) {
    console.log(i);
}


console.log("backwards");

for(let i = 15; i >= 1; i = i-2) {
    console.log(i);
}


for ( let i=2; i<=10; i=i+2) {
    console.log(i);
}
*/




/*for(let i=1; i>=0; i++) {
    console.log(i);
}*/



//for (let i=2; i<=20; i=i+2) {
//    console.log(i);
//}


/* tables
let n = prompt("Write your number");
n = parseInt(n);

 for(let i=n; i<=n*10; i = i+n) {
    console.log(i);
 }*/


/*Nested Loop
for(let i=1; i<=3; i++ ) {
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++) {
        console.log(j);
    }
} */





/* while loop

let i=5;

while(i>=1) {
    console.log(i);
    i--;
}


let j=1;

while (j<=5) {
    console.log(j);
    j++;
}
*/


/* Favorite Movie
const favMovie = "avatar";

let guess = prompt("guess my favorite movie");

while (guess != favMovie) {
    if(guess == "quit") {
    console.log("you quit");
    break;
    }
    guess = prompt("wrong guess. please try again");
}

if(guess == favMovie) {
    console.log("congrats!!");
} */


/*let i=1;
while(i<=5) {
    if(i == 3) {
        break;
    }
    console.log(i);
    i++;
}

console.log("we used break at 3");
*/


/* loops in array
let fruits = ["mango", "apple", "banana", "lithchi", "orange"];
fruits.push("pineapple");

for(let i=0; i<fruits.length; i++ ) {
    console.log(i, fruits[i]);
}

for(let i=fruits.length ; i>0; i--) {
    console.log(i, fruits[i]);
}*/


/* nested array in loop
let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder women", "flash"]
]

for(let i=0; i<heroes.length; i++) {
    console.log(heroes[i]);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}*/


let student = [ ["aman", 95], ["shradha", 94.5], ["divya", 100]];

for(let i=0; i<student.length; i++) {
    console.log(`info of student#${i}`);
    for(let j= 0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
}