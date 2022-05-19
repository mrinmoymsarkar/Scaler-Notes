/*
Q1. Equilibrium index of an array
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

NOTE:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.



Problem Constraints
1 <= N <= 105
-105 <= A[i] <= 105


Input Format
First arugment is an array A .


Output Format
Return the equilibrium index of the given array. If no such index is found then return -1.


Example Input
Input 1:
A=[-7, 1, 5, 2, -4, 3, 0]
Input 2:

A=[1,2,3]


Example Output
Output 1:
3
Output 2:

-1


Example Explanation
Explanation 1:
3 is an equilibrium index, because: 
A[0] + A[1] + A[2] = A[4] + A[5] + A[6]
Explanation 1:

There is no such index.
*/


module.exports = { 
 //param A : array of integers
 //return an integer
	solve : function(A){
    //     let prefixSum = new Array();
    //     prefixSum[0] = A[0]
    //   for (let i = 1; i< A.length; i++){
    //       prefixSum[i]= prefixSum[i-1] + A[i]
    //   }

    //   for (let i = 1; i< A.length; i++){
    //     let pl = prefixSum[i-1],
    //     pr = prefixSum[A.length - 1] - prefixSum[i]
    //     // console.log('prefixSum[A.length - 1]',prefixSum[A.length - 1])
    //     // console.log('prefixSum[i]',prefixSum[i])
    //     // console.log('i',i)
    //     // console.log('pl', pl)
    //     // console.log('pr',pr)
    //       if(pl === pr){
    //         return i
    //       }
    //   }
    //   if(prefixSum[A.length -1] - prefixSum[0] === 0){
    //           return 0
    //       }
    //       if(prefixSum[A.length -1] - prefixSum[A.length - 2] === 0){
    //           return A.length -1
    //       }
    //   return -1
    //   // console.log(prefixSum)

            let sum = 0;
            for(let i = 0; i< A.length; i++)
                sum += A[i];
            let left_sum = 0;
            for( let i = 0; i< A.length; i++) {
                sum -= A[i];
                if(sum == left_sum)
                    return i;
                left_sum += A[i];
            }
            return -1;
	}
};
