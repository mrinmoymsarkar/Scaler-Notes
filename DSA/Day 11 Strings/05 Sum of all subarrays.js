/*
Q2. Sum of All Subarrays
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
You are given an integer array A of length N.
You have to find the sum of all subarray sums of A.
More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
A subarray sum denotes the sum of all the elements of that subarray.



Problem Constraints
1 <= N <= 105
1 <= Ai <= 10 4


Input Format
The first argument is the integer array A.


Output Format
Return a single integer denoting the sum of all subarray sums of the given array.


Example Input
Input 1:
A = [1, 2, 3]
Input 2:

A = [2, 1, 3]


Example Output
Output 1:
20
Output 2:

19


Example Explanation
Explanation 1:
The different subarrays for the given array are: [1], [2], [3], [1, 2], [2, 3], [1, 2, 3].
Their sums are: 1 + 2 + 3 + 3 + 5 + 6 = 20
Explanation 2:

Similiar to the first example, the sum of all subarray sums for this array is 19.
*/
module.exports = { 
 //param A : array of integers
 //return a long integers
	subarraySum : function(A){
        // console.log(A)
//         let global_sum = 0n, sum = 0n;
//    for(let i = 0; i< A.length;i++){
//        sum =0n;
//        for(let j =i ;j<A.length; j++){
//            sum += A[j]
//            global_sum+= sum;
//         //    console.log(sum)
//        }
//    }
//    return global_sum
let result = BigInt(0);
for(let i = 0; i< A.length; i++){
    let x = (i + 1) * (A.length - i)
  result+= BigInt(A[i]) * BigInt(x);  
}
return result;
  }
}
