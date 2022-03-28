const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome')

reader.question('please enter your password!', function         //I was just so lost on what I should or shouldnt have been using from the pre-made starting code and not understanding functions yet in general but this made some sense
(response){
    if(response.length >= 10){
        console.log('you win')
    } else {
        console.log('you lost')
    }
    reader.close()
})