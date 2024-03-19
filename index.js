// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const firstName="Lilian";
console.log(firstName)

//TODO: ADD redeclarable variable
var age=19;
console.log(age)
//TODO: ADD re-assignable but not redeclarable variable
let faveColor="lilac";
console.log(faveColor)
// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const pi=3.14159;
console.log(pi)
//TODO: Create a redeclarable variable with a boolean value
var rainyDay=true;
console.log(rainyDay)
//TODO: Create a re-assignable variable with a string value
let faveSnack="chicken pie";
console.log(faveSnack)

// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let day="Monday";
let weatherState="is going to be sunny";
let mondayWeather=day+weatherState ;
console.log(mondayWeather)

//TODO: Interpolate string (`${}`)
let tomorrowsWeather=`${day}${weatherState}`;
console.log(tomorrowsWeather)

//TODO: Convert to uppercase
let text1="Hello Lilian nice to meet you";
let text2=text1.toUpperCase();
console.log(text2)

//TODO: Convert to lowercase
let text3=text1.toLowerCase();
console.log(text3)

//TODO: Index a specific character
let phrase="A bird in hand";
let char=phrase.charAt(4);console.log()
console.log(char)

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
let a=4;
console.log(a===4)

//TODO: strict inequality
let b="8";
console.log(b!==8)

//TODO: equality
let c=5;
console.log(c=="5")

//TODO: inequality
let d=4;
console.log(d!="4")

//TODO: greater than
console.log(20>15)

//TODO: less than

console.log(12<18)
//TODO: greater or equal to
console.log(5>=3)

//TODO: less or equal to

console.log(6<=10)

// 5.0 CONTROL FLOW
// TODO: if-else statement
let temp=25;
if(temp<22){
    console.log("Carry a coat");
}   else{
    console.log("Enjoy sunny weather");
} 

//TODO: switch-case

const faveIcecream = "salted caramel";
 
switch (faveIcecream) {
  case "vanilla":
    console.log("My favourite icecream is vanilla");
    break;
  case "salted caramel":
    console.log("My favourite icecream is salted caramel");
    break;
  case"strawberry":
    console.log("My favourite icecream is strawberry");
    break;
  case "blueberry":
    console.log("My favourite icecream is blueberry");
    break;
  case "pistachio":
    console.log("My favourite icecream is pistachio");
    break;
  default:
    console.log("I don\'t like icecream");
    break;
}node




