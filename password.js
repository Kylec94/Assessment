const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the Password Validator tool! What is your password?", function(input){
	tokens = input.split(' ');
	
	password = tokens[10];
	


	// This line closes the connection to the command line interface.
	reader.close()

});
let password = 

if(password >= 10){
    console.log('Your password works!')
} else {
    console.log('Your password is not long enough')
}

// just cant figure out how to check for actual letters or deal with that also calculator prewritten text i wasnt sure what to add or remove etc to work with letters instead of numbers and math symbols