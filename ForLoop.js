// Declare the Incrementor (runs once before the loop starts)
// let i = 0

// Condition (is checked once before each iteration of the loop.
// If it is false the loop is broke)
// i < 5

// Incrementor/incrementing statement (is run once after each iteration of the loop)
// i++

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// Q1.

// for (let i = 2; i <= 6; i++) {
//     console.log(i);
// }

// Q2.

// for (let i = 11; i <= 20; i += 2) {
//     console.log(i);    
// }

// Q3.

// for (let i = 3; i >= -4; i--) {
//     console.log(i);
//     }

// Q4.

// for (let i = 30; i <= 75; i += 5) {
//     console.log(i);
//     }

// % modulas

// Example
// by changing == 0 (for even numbers) or changing to == 1 (for odd numbers)
// for (let i = 9; i <= 17; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i)
// }

// Q1.
// for (let i = 10; i <= 16; i++) {
//     if (i % 2 == 1) {
//     continue;
//     }
//     console.log(i)    
// }

// Q2.
// for (let i = 45; i >= 33; i--) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i)
// }

// Q3.
// for (let i = 50; i <= 100; i += 5) {
//     if (i % 10 == 0) {
//         continue;
//     }
//     console.log(i)
// }

// Q4. above questions with a while loop
// 1. 
// let i = 10;
// while (i <= 16){
//     if (i % 2 == 1){
//         i++;
//         continue;
//     }
//     console.log(i)
//     i++;
// }

// 2.
// let i = 45;
// while (i >= 33) {
//     if (i % 2 == 0) {
//         i--;
//         continue;
//     } 
//     console.log(i)
//     i--;
// }

// 3.
let i = 50;
while (i <= 100) {
    if (i % 10 == 0) {
        i += 5;
        continue;
    }
    console.log(i)
    i += 5;
}
