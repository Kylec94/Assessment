//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

let colorCopy = faveColors.slice()
console.log(colorCopy)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

faveColors.push('blue')
console.log(faveColors)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/



//CODE HERE

const numbers = [1, 2, 3, 4, 5]
let middleNums = numbers.splice(1, 3)
console.log(middleNums)


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE

// I was putting different attempts of code into comments because I couldn't get it to work so figured I would show all attempts and the third thing I tried which was just writing 2 different for loops even tho that seems inneficient...wasn't working before. But as I was about to just leave the problem it randomly does now so I'll just leave it at the top I suppose. I just dont know why else wouldnt work

let answers = []

for(i = 0; i < bigOrSmallArray.length; i++) {
  if(bigOrSmallArray[i] > 100)
 answers.push('big');
} 
for(i = 0; i < bigOrSmallArray.length; i++){
  if(bigOrSmallArray[i] <= 100) 
  answers.push('small')
}
console.log(answers)

// Below code gave unexpected token of "else"

//  for(i = 0; i < bigOrSmallArray.length; i++) {
//   if(bigOrSmallArray[i] > 100)
//  answers.push('big');
// } else {
//   answers.push('small')
// }


// for(i = 0; i < bigOrSmallArray.length; i++) {
//   if(bigOrSmallArray[i] > 100)
//  answers.push('big');
// } if(bigOrSmallArray[i] <= 100) {
//   answers.push('small')
// }
//  console.log(answers)