/*
Problem Description
You are given an integer array A. You have to find the second largest element/value in the array or report that no such element exists.



Problem Constraints
1 <= |A| <= 105

0 <= A[i] <= 109



Input Format
The first argument is an integer array A.



Output Format
Return the second largest element. If no such element exist then return -1.



Example Input
Input 1:

 A = [2, 1, 2] 
Input 2:

 A = [2]


Example Output
Output 1:

 2 
Output 2:

 -1 


Example Explanation
Explanation 1:

 First largest element = 2
 Second largest element = 2
 Third largest element = 1
Explanation 2:

 There is no second largest element in the array.

 */

module.exports = { 
 //param A : array of integers
 //return an integer
	solve : function(A){
        let arr = new Array()
        // console.log('ssize', A.length)
        for(let i = 0; i<A.length; i++){
          arr.push(Number(A[i]))
        }
      var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    if( Math.max.apply(null, arr)!== -Infinity){
    return Math.max.apply(null, arr)
    }
    else{
        return -1
    }
	}
};
