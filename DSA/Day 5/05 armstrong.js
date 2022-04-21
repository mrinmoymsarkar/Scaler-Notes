//armstrong
//intuitive solution

// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
let input = '';

process.stdin.on('data', function(inputStdin) {
    input += inputStdin;
});

process.stdin.on('end', function() {
    input = parseInt(input.trim().split());

    main();
});

function armstrong (input){    
//    console.log(input)
   for(let i = 1; i<=input; i++){
      let number = Array.from(String(i,Number)), sum = 0;
    //   console.log('number', number)
      for(let j = 0; j< number.length; j++){
        //   console.log('j', number[j]);
        sum += number[j]*number[j]*number[j]
      }

    //   console.log('sum', sum)
    //   console.log('i', i)
      if(sum === i){
          console.log(i)
      }
   }
}

function main() {
 armstrong(input)
}

