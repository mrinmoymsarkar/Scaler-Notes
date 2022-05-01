//https://www.scaler.com/academy/mentee-dashboard/class/25312/homework/problems/11228?navref=cl_tt_lst_sl

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = parseInt(inputString.trim().split());

    main();
});

function table(input){
    for(let i = 1;i<=10; i++){
        console.log(input + ' * ' + i + ' = ' +  input * i)
    }
}

function main() {
  // Write your code here
  // Use console.log to output the result
  table(inputString)
}
