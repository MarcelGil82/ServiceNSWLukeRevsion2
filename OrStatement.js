// let age = 11;
// let isDriving = false;

// if(age <= 17 || isDriving) {
//     console.log("Can't drink up!")
// } else {
//     console.log("You can have alcohol!")
// }

// let age = 21;
// let isDriving = false;
// let isDriverTester = true;

// if(age <= 17 || isDriving || isDriverTester) {
//     console.log("Can't drink up!")
// } else {
//     console.log("You can have alcohol!")
// }

// Restaurant Exercise
// Q1.
// let openTime = 17;
// let closeTime = 22;
// let currentTime = 2;

// if (currentTime < openTime || currentTime > closeTime) {
//     console.log("Please come back between 17hr and 22hr")
// } else {
//     console.log("We are open for dining")
// }

//Q2.
// let openTime = 17;
// let closeTime = 22;
// let currentTime = 20;
// let isMonday = false;

// if (currentTime < openTime || currentTime > closeTime || isMonday) {
//     // false                    false                   false
//     console.log("Please come back between 17hr and 22hr")
// } else {
//     console.log("We are open for dining")
// }

// this is hardcoded and should not be done this way, it means the open and close vaiable time can't be changed.
// let openTime = 17;
// let closeTime = 22;
// let currentTime = 21;
// let isMonday = true;

// if (currentTime > 22 || currentTime < 17 || isMonday) {
//     //          22 is hardcoded     17 is hardcoded
//     console.log("Please come back between 17hr and 22hr")
// } else {
//     console.log("We are open for dining")
// }

let firstOption = "";       // score
let secondOption = "";      // head
let thirdOption = "";       // pass

let footballerShould = firstOption || secondOption || thirdOption || "Dive"
console.log(footballerShould)