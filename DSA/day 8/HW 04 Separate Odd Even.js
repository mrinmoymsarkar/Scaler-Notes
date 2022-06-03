/*
Q4. Separate Odd Even
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
You are given an integer T denoting the number of test cases. For each test case, you are given an integer array A.

You have to put the odd and even elements of array A in 2 separate arrays and print the new arrays.

NOTE: Array elements should have the same relative order as in A.



Problem Constraints
1 <= T <= 10

1 <= |A| <= 105

1 <= A[i] <= 109



Input Format
First line of the input contains a single integer T.

For each test case:

First line consists of a single integer |A| denoting the length of array.
Second line consists of |A| space separated integers denoting the elements of array A.


Output Format
For each test case:

First line should contain an array of space separated integers containing all the odd elements of array A
Second line should contain an array of space separated integers containing all the even elements of array A


Example Input
Input 1:

 2 
 5
 1 2 3 4 5
 3
 4 3 2
Input 2:

 2 
 3
 2 2 2
 2
 1 1


Example Output
Output 1:

 1 3 5
 2 4
 3
 4 2
Output 2:

  
 2 2 2
 1 1
     


Example Explanation
Explanation 1:

 Test Case 1: 
 Odd elements in the array(in the order they occur) are: 1, 3, 5.
 Even elements in the array(in the order they occur) are: 2, 4.

 Test Case 2 
 Odd elements in the array(in the order they occur) are: 3.
 Even elements in the array(in the order they occur) are: 4, 2.
Explanation 2:

 Test Case 1: 
 There are no odd elements in the array.
 /*
 Even elements in the array(in the order they occur) are: 2, 2, 2.

 Test Case 2 
 Odd elements in the array(in the order they occur) are: 1, 1.
 There are no even elements in the array.



JavaScript (ES6)
353637383940414243444534333231
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function(){
  input_stdin_array = input_stdin.split("\n");
…            }
            console.log(odd )
            console.log(even )
       }
}
Test Output
Code's All Neat!
Compiling your Code...
> Success!
Running Test Cases...
> TestCase - Easy Success
> TestCase - Hard Success
Final Verdict
> Correct Answer
TestTest With Custom InputRe-Run Custom Test
*/

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function(){
  input_stdin_array = input_stdin.split("\n");
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}

// input_stdin_array contains each line of input as a string
// Your code goes here

function main(){
      let t = Number(readLine());

      //loop t times
    //   console.log('t', t)

    //    let a = 
       for(let i = 0 ; i<t ; i++){
            let n =  Number(readLine());
            let arr = new Array()
            arr = readLine().split(" ");
            // console.log('n',n)
            // console.log('arr',arr)
            var odd= '',  even= '';
            for(let j = 0; j< n; j++){
                if(arr[j] % 2 === 0){
                    even = even + arr[j] + ' '
                }
                else{
                    odd = odd + arr[j] + ' ' 
                }
            }
            console.log(odd )
            console.log(even )
       }
}
