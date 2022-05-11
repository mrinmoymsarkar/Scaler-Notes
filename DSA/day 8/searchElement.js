/*
Problem Description
You are given an integer T (number of test cases). You are given array A and an integer B for each test case. You have to tell whether B is present in array A or not.



Problem Constraints
1 <= T <= 10

1 <= |A| <= 105

1 <= A[i], B <= 109



Input Format
First line of the input contains a single integer T.

Next, each of the test case consists of 2 lines:

First line begins with an integer |A| denoting the length of array, and then |A| integers denote the array elements.
Second line contains a single integer B


Output Format
For each test case, print on a separate line 1 if the element exists, else print 0.



Example Input
Input 1:

 1 
 5 4 1 5 9 1
 5
Input 2:

 1
 3 7 7 2
 1 


Example Output
Output 1:

 1 
Output 2:

 0 


Example Explanation
Explanation 1:

  B = 5  is present at position 3 in A 
Explanation 2:

  B = 1  is not present in A. 


*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => 
{
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => 
    {
        return string.trim();
    });
    main();    
});

function readline() 
{
    return inputString[currentLine++];
}
function main() 
{
    let t = Number(readline());
    // console.log('t', t)
    while(t--)
    {
      
let a = readline().split(" ");
        let n = Number(a[0]);
        // console.log('a', a)
        let b = Number(readline());
        // console.log('b', b)
        let ans = 0;
        for( let i = 1; i <= n; i++)
        {
            if(a[i] == b)
                ans = 1;
        }
        console.log(ans);
    }
}
