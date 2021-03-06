


/*
Q4. Range Sum Query
Attempted
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (1 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.



Problem Constraints
1 <= N, M <= 105
1 <= A[i] <= 109
1 <= L <= R <= N


Input Format
The first argument is the integer array A.
The second argument is the 2D integer array B.


Output Format
Return an integer array of length M where ith element is the answer for ith query in B.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [[1, 4], [2, 3]]
Input 2:

A = [2, 2, 2]
B = [[1, 1], [2, 3]]


Example Output
Output 1:
[10, 5]
Output 2:

[2, 4]


Example Explanation
Explanation 1:
The sum of all elements of A[1 ... 4] = 1 + 2 + 3 + 4 = 10.
The sum of all elements of A[2 ... 3] = 2 + 3 = 5.
Explanation 2:

The sum of all elements of A[1 ... 1] = 2 = 2.
The sum of all elements of A[2 ... 3] = 2 + 2 = 4.

*/
module.exports = { 
 //param A : array of integers
 //param B : array of array of integers
 //return a array of long integers
	rangeSum : function(A, B){
    //     let prefixSum = []
    // for (let i = 0; i< A.length; i++){
    //       prefixSum.push(0);
    //   }
    //   console.log(prefixSum)
    //     //  console.log(B.length)
    //     let ans = [];
    //     for(let i = B.length; i>0; B--){
    //         console.log(prefixSum[i][1])
    //         ans = ans.push(prefixSum[i][1]-1 - prefixSum[i][0]-2)
    //         console.log(ans)
    //     }
            
        
	// }
    let pre = [];
	     for(let i = 0; i <= A.length ; i++)
	        pre.push(0n);
	     let ans = [];
	     
	     for( let i = 0; i < A.length ; i++) {
	         pre[i+1] = pre[i];
	         pre[i+1] = pre[i+1] + A[i];
	     }
	     
	     for( let i = 0; i < B.length ; i++) {
	        ans.push(pre[B[i][1]] - pre[B[i][0]-1]);
	     }
	     
	     return ans;
	}
};

