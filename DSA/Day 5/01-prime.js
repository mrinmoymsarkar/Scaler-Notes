//Is it prime
// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    input += inputStdin;
});

process.stdin.on('end', function() {
    input = parseInt(input.trim().split());


    function checkPrime (input){
        let is = 'NO'
    for(let i = 2; i<input; i++ ){
  
        if(input % i === 0) {
          
            return console.log(is)
        }
    }
    is = 'YES'
  return console.log(is)
}

function main() {
checkPrime(input);
}

    main();
});


