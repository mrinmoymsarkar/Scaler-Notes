/*
Problem Description

Given an integer array A and an integer B, you have to print the same array after rotating it B times towards the right.

NOTE: You can use extra memory.



Problem Constraints

1 <= |A| <= 106

1 <= A[i] <= 109

1 <= B <= 109



Input Format

The first line begins with an integer A denoting the length of an array, and then A integers represent the array elements.
The second line contains a single integer B



Output Format

Print an array of integers which is the Bth right rotation of input array A, on a separate line.



Example Input

Input 1:

 4 1 2 3 4
 2
Input 2:

 3 1 2 2
 3


Example Output

Output 1:

 3 4 1 2
Output 2:

 1 2 2


Example Explanation

Explanation 1:

 [1,2,3,4] => [4,1,2,3] => [3,4,1,2]

Explanation 2:


 [1,2,2] => [2,1,2] => [2,2,1] => [1,2,2]
*/

// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();    
});

function readline() {
    return inputString[currentLine++];
}
function main() {
   
    // code here
     let a = readline().split(" ");
       
        let t =  a.shift()
        //  console.log('a', a)
        // console.log('r', r)
        let b = Number(readline()) % t;
        // console.log('b', b)

        reverse(a, 0, t-1 )
        reverse(a, 0, b-1 )
        reverse(a, b, t-1 )
        let rotated = ""
        for (let i in a){
            rotated += a[i] + " "
        }
        console.log(rotated)

}

function reverse (a, start, end) {
    let i,j;
    for ( i = start, j=end; i<j; i++,j--){
        let temp = a[i]
        a[i] = a[j]
        a[j] = temp
    }
}
