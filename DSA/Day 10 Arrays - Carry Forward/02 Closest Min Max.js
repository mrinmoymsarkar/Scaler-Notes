/*
Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints
1 <= |A| <= 2000



Input Format
First and only argument is vector A



Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input
Input 1:

A = [1, 3]
Input 2:

A = [2]


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 Only choice is to take both elements.
Explanation 2:

 Take the whole array.
*/

module.exports = { 
 //param A : array of integers
 //return an integer
	solve : function(A){
     let max = Math.max.apply(null, A), min =  Math.min.apply(null, A), 
     ans = Infinity, latest_min= -1, latest_max = -1;
    // console.log('max', max)
    // console.log('min', min)
     for(let i = 0; i<A.length; i++){
         if(A[i] === max){
             if(latest_min === -1){
                 latest_max = i
             }
             if(latest_min != -1){
                 ans = Math.min(ans, i - latest_min + 1)
                 latest_max = i;
                //  console.log('latest_max', latest_max)
             }
         }
          if(A[i] === min){
              if(latest_max === -1){
                 latest_min = i
             }
              if(latest_max != -1){
              ans = Math.min(ans, i - latest_max + 1)  
              latest_min = i;
            //   console.log('latest_min', latest_min)
              }
         }
     }
     return ans
	}
};

