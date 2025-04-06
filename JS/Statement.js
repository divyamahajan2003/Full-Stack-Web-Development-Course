// Conditional Statements
/*console.log("before my if statement");
let age = 23;
if (age>=18){
    console.log("you can vote");
    console.log("you can drive");
    let a = 5;
    console.log(5 * a);
}

if (age > 20) {
    console.log("you are in your 20s");
}
console.log("after my if statement");
*/



//Conditional Statements
/*let firstName = "Divya";
if (firstName == "Divya") {
    console.log(`Welcome ${firstName}`);
}
*/



/*Practice Question 1(Trafic Light System)
let color = "green";
if (color === "red") {
    console.log("Stop! light color is red");
}
else if (color === "yellow") {
    console.log("slow down light color is yellow");
}
 else if (color === "green") {
    console.log("go light color is green");
}
*/



//Else if Condition
let age = 23;
if (age >= 18) {
    console.log("you can vote");
} else if (age < 18) {
    console.log("you cannot vote");
}



/*let marks = 40;
if(marks >= 80) {
    console.log("A+");
} else if (marks >= 60) {
console.log("A");
} else if (marks >= 33) {
    console.log("B");
} else if (marks < 33) {
    console.log("F");
} 
*/


let month = "january";
if (month === "january") {
    console.log("winter is here");
}else if (month === "april") {
    console.log("summer is here");
}





// Else Condition
let length = 13;
if (length >= 18) {
    console.log("you can apply");
} else {
    console.log("you cannot apply");
}



// practice question 2
let size = "S";
if(size === "XL") 
{
    console.log("price is Rs. 250");
} else if(size === "L") {
    console.log("price is Rs. 200");
} else if (size === "M"){
    console.log("price is Rs.100");
} else {
    console.log("price is Rs.50");
}



// Nested if else
let marks = 56     ;
if (marks >= 33) {
    console.log("Pass");
    if (marks >= 80) {
        console.log("Grade : 0");
    } else {
        console.log("Grade : A");
    } 
}else {
        console.log("Better luck next time!");
    }



// Practice Question
let str = "apple   ";
if (str[0] === 'a' && str.length >3) {
    console.log("good string");
} else {
    console.log("not a good string");
}


// truthy  & falsy
if(true) {
    console.log("it has true value");
} else {
    console.log("it has false value");
}

let string = "";
if (string) {
    console.log("string is not empty");
} else {
    console.log("string is empty");
}



// Switch Statement 
let color = "yellow";

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("light is broken");
}


// Practice Question
 let day = 10;

 switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
         console.log("Friday");
        break;
    case 6:
         console.log("Saturday");
        break;
    case 4:
        console.log("Sunday");
        break;
    default:
        console.log("wrong day");
 }