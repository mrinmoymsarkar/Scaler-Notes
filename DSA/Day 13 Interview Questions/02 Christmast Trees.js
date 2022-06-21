/*
Q2. Christmas Trees
Attempted
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
You are given an array A consisting of heights of Christmas trees and an array B of the same size consisting of the cost of each of the trees (Bi is the cost of tree Ai, where 1 ≤ i ≤ size(A)), and you are supposed to choose 3 trees (let's say, indices p, q, and r), such that Ap < Aq < Ar, where p < q < r.
The cost of these trees is Bp + Bq + Br.

You are to choose 3 trees such that their total cost is minimum. Return that cost.

If it is not possible to choose 3 such trees return -1.



Problem Constraints
1 <= A[i], B[i] <= 109
3 <= size(A) = size(B) <= 3000



Input Format
First argument is an integer array A.
Second argument is an integer array B.



Output Format
Return an integer denoting the minimum cost of choosing 3 trees whose heights are strictly in increasing order, if not possible, -1.



Example Input
Input 1:

 A = [1, 3, 5]
 B = [1, 2, 3]
Input 2:

 A = [1, 6, 4, 2, 6, 9]
 B = [2, 5, 7, 3, 2, 7]


Example Output
Output 1:

 6 
Output 2:

 7 


Example Explanation
Explanation 1:

 We can choose the trees with indices 1, 2 and 3, and the cost is 1 + 2 + 3 = 6. 

*/

// module.exports = { 
//  //param A : array of integers
//  //param B : array of integers
//  //return an integer
// 	solve : function(A, B){
//         let n = A.length,cost = 0, minCost =+Infinity;
//         for(let i = 0; i<n; i++){
//             for(let j = i+1; j<n; j++){
//                 for(let k = j+1; k<n; k++){
//                     cost = 0
//                   if(A[i]<A[j] && A[j]< A[k]){
//                       cost = B[i]+ B [j] + B[k]
//                       minCost = Math.min(cost, minCost)
//                     //   console.log('cost', cost)
//                   }  
//             }
//             }
//         }
//         if(minCost === Infinity)
// {         return -1;
// }        else{
//             return minCost
//         }
// 	}
// };


module.exports = { 
 //param A : array of integers
 //param B : array of integers
 //return an integer
	solve : function(A, B){
        let n = A.length,cost = 0, minCost =+Infinity;
        for(let i = 1; i<n-1; i++){
            let lmin= +Infinity, rmin = +Infinity;
            for(let j = i-1; j>=0; j--){
                if(A[i]>A[j]){
                lmin =  Math.min(lmin, B[j])
                }
                // else{
                //     return -1
                // }
            }

            for(let k = i+1; k<n; k++){
                 if(A[i]<A[k]){
                rmin =  Math.min(rmin,B[k])
            }
            // else{
            //         return -1
            //     }
            }
            if(lmin != Infinity && rmin != Infinity){
            cost = B[i]+ lmin + rmin
            minCost = Math.min(cost,minCost)
}
        }
        if(minCost === Infinity)
{         return -1;
}        else{
            return minCost
        }
	}
};
