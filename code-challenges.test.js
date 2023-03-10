// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
//Pseudocode :create a new function called returnArray using .map to go through each value in the array to multiplied by 3
// inputs will be numbersArray 1 and 2 and multiply by 3
// output returning values in the arrays given.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// const returnArray = (array) => {
//     return array.map(value => value * 3)
// }

// describe("returnArray", () => {
//     it("returns array multiplied by 3", () => {
//       expect(returnArray(numbersArray1)).toEqual("[18, 21, 24, 27, 30]")
//       expect(returnArray(numbersArray2)).toEqual("[72, 81, 90, 99, 108]")
//     })
// })




// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// Pseudocode: Create a new function called divisible3
// input: numbers given object 1,2, and 3 from the example
// output: "number" divisible by three or not

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// // b) Create the function that makes the test pass.

// const divisible3 = (object) => {
//     if(object.number % 3 === 0){
//         return `${object.number} is divisible by three`
//     }   else {
//         return `${object.number} is not divisible by three`
//     }
// }

// describe("divisible3", () => {
//     it("returns a statement with the appropriate coffee order", () => {
//       expect(divisible3(object1)).toEqual("15 is divisible by three")
//       expect(divisible3(object2)).toEqual("0 is divisible by three")
//       expect(divisible3(object3)).toEqual("-7 is not divisible by three")
//     })
//   })

  //TEST :     ReferenceError: divisible3 is not defined
    //Test Suites: 1 passed, 1 total
    //Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//PSEUDOCODE: Create a const called arrayCap using .map to create the new returning array and .toUpperCase to capitalize that array and .slice for position of the index
//INPUT: randomNouns1 array and randomNouns2 array
//OUTPUT:  randomNouns1 and 2 arrays capitalized
// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//  // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// // b) Create the function that makes the test pass.

// const arrayCap = (array) => {
//     return array.map(value => {
//         return value.charAt().toUpperCase() +value.slice(1)
//     })
// }

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



//  describe("arrayCap", () => {
//      it("returns a statement with the appropriate coffee order", () => {
//        expect(arrayCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//        expect(arrayCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//      })
//    })
   // ReferenceError: arrayCap is not defined


 // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

 //PSEUDOCODE: Create a const vowelsA labeling the vowels to be searched by index
 //             Create the function indexVowel that will go through each index to use .include
//              to find the vowel and give the index as the return
// INPUT: voweltesters given
//OUTPUT: 1,0,2
// a) Create a test with expect statements for each of the variables provided.

 const vowelTester1 = "learn"
// // Expected output: 1
 const vowelTester2 = "academy"
// // Expected output: 0
 const vowelTester3 = "challenges"
// // Expected output: 2

// // b) Create the function that makes the test pass.
const vowelsA = ["a", "e", "i", "o", "u"]
const indexVowel = array => {
//     return value.length (value => {
//         return value.indexOf() .includes(vowelsA => {
//             return array})
//         })
// }

//*UPDATE*   .include() is where if this array or string includes this value it will be extracted into the new array and 
//*UPDATE*   .length is going through and stopping at the END and not continuing non stop. After the past two days i have more understanding the use of .include()

    // ******** I have tried different ways to get this to work and only results of the second and
    // ******** third expected answers come up i cannot get the first value
    // ******** these are my errors

    //ERRORS :  return array.length (value => {
    //          >125 |   return array.length (value).indexOf() .includes(vowelsA => {
          |                          ^
    //           describe("indexVowel", () => {
    //   129 |         it("returns a the index of the first vowel", () => {
    //     > 130 |           expect(indexVowel(vowelTester1)).toEqual("1")
    //           |                                            ^
    //       131 |           expect(indexVowel(vowelTester2)).toEqual("0")
    //       132 |           expect(indexVowel(vowelTester3)).toEqual("2")
    //       133 |         })
    


//  describe("indexVowel", () => {
//         it("returns a the index of the first vowel", () => {
//           expect(indexVowel(vowelTester1)).toEqual("1")
//           expect(indexVowel(vowelTester2)).toEqual("0")
//           expect(indexVowel(vowelTester3)).toEqual("2")
//         })
//       })

      //    ReferenceError: indexVowel is not defined


    