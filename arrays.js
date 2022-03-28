//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

// changed let to const
const colorCopy = faveColors.slice()
console.log(colorCopy)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

// In this second version I changed from faveColors.push to colorCopy.push because for some reason I just misread that

colorCopy.push('blue')
console.log(colorCopy)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/



//CODE HERE

// changed let to const 
const numbers = [1, 2, 3, 4, 5]
const middleNums = numbers.splice(1, 3)
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

// Added "let" to "i = 0". In previous "else" statement code attempt I missed the opening and closing {} after the "if(bigOrSmallArray[i] > 100)" which I keep forgetting that even though it feels like you're opening another bracket before closing the first one, the first one actually is closed but just at the very bottom and will continue to move on down and maintain its "all encompassing" position. You probably saw that instantly but feels helpful to comment on problems

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

const answers = []

for(let i = 0; i < bigOrSmallArray.length; i++){ 
   if(bigOrSmallArray[i] > 100){
     answers.push('big')
   } else {
     answers.push('small')
   }
 }
 console.log(answers)


