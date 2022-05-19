/*
Q2. Count ways to make sum of odd and even indexed elements equal by removing an array element
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Problem Constraints
1 <= n <= 105
-105 <= A[i] <= 105


Input Format
First argument contains an array A of integers of size N


Output Format
Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Example Input
Input 1:
A=[2, 1, 6, 4]
Input 2:

A=[1, 1, 1]


Example Output
Output 1:
1
Output 2:

3


Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.



See Expected Output
*/


module.exports = { 
 //param A : array of integers
 //return an integer
	solve : function(A){
        let pse= new Array();
        let pso = new Array();
         let len = A.length;
        pse[0] = A[0], pso[0] = 0
        //  console.log('pso', pso)
        // console.log('pse', pse)
        for (let i = 1; i<len; i++){
            if(i%2 === 0){
                // console.log('i', A[i])
                pse[i] = pse[i-1] + A[i];
                pso[i] = pso[i-1] 

            }
            else{
                pso[i] =  pso[i-1] + A[i]
                pse[i] = pse[i-1] 
            }
        }
        // console.log('pso', pso)
        // console.log('pse', pse)
        let count = 0;
    for (let i = 0; i<len; i++){
        let se=0, so=0;
        if(i===0){
            se = (pso [len -1]- pso[i]);
            so = (pse [len -1]- pse[i]);
           }
           else{
        se = pse[i-1] + (pso [len -1]- pso[i]);
        so = pso[i-1] + (pse [len -1]- pse[i]);
           }
       
        //     console.log('so', so)
        //    console.log('se',se)
            if (so === se) count++    
        }
        return count
return -1
	}
};
