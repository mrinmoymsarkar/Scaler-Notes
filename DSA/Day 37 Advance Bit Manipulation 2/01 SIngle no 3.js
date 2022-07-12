/*
Problem Description
Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
Find the two integers that appear only once.



Problem Constraints
2 <= |A| <= 100000
1 <= A[i] <= 109



Input Format
The first argument is an array of integers of size N.



Output Format
Return an array of two integers that appear only once.



Example Input
Input 1:
A = [1, 2, 3, 1, 2, 4]
Input 2:

A = [1, 2]


Example Output
Output 1:
[3, 4]
Output 2:

[1, 2]


Example Explanation
Explanation 1:
3 and 4 appear only once.
Explanation 2:

1 and 2 appear only once.
*/

module.exports = { 
 //param A : array of integers
 //return a array of integers
	solve : function(A){
       let xor = A[0], n= A.length;
       for(let i = 1; i< A.length; i++){
           xor = xor ^ A[i]
       }

       let xor1=0, xor2=0;

       for(i = 0; i< A.length; i++){
           if((A[i] & (xor ^ (xor & (xor -1))))!= 0){
               xor1 = xor1 ^ A[i]
           }
           else{
               xor2 = xor2 ^ A[i]
           }
       }

       let ans = [xor1, xor2].sort((a, b) => a - b)
   
       return ans;
    }
};
