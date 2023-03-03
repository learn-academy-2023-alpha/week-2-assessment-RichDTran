// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
//console.log(cohort.split(""))

// a) Your answer: It will space out each value such as "A" "l" "p" "h" "a" "2" "0" "2" "3"
// b) Verify and explain: My answer was correct besides the "" , .split seperates each value

// 'A', 'l', 'p', 'h',
// 'a', ' ', '2', '0',
// '2', '3'


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 //console.log(greeter("LEARN Student"))

// a) Your answer: This function greeter will log `Hello, (whatever input/value)!
// b) Verify and explain: "undefined" my answer was incorrect because i did not pay attention closely
// that there is no "return" given making it undefined

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
 //console.log(multipliedByTwo)

// a) Your answer:This function will log each number multiplied by 2
// b) Verify and explain: [ 8, 10, 12, 14, 16 ]
// .map goes through each value and is multiplied by 2 in the given array

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 //console.log(onlyOdds)

// a) Your answer: This function will go through each value and will divide by 2 and if 
//   evenly divided and if there is a remainder will return through the log which would be "odd"
// b) Verify and explain: [ 11, 13, 15 ] these values do not evenly divded by 2 and have a remainder
// verifying these numbers are odd and are returned.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: This function will log javascript from the category languages due to the index [0]
// b) Verify and explain: Javascript
// This is logged because it goes through the method of myCodingSkills to the category
// of languages and by putting [0] for its location starting at 0 which is Javascript.
