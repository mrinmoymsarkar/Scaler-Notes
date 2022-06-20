/*
Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order.



Problem Constraints
1 <= A <= 1000



Input Format
First and only argument is integer A


Output Format
Return a 2-D matrix which consists of the elements in spiral order.



Example Input
Input 1:

1
Input 2:

2


Example Output
Output 1:

[ [1] ]
Output 2:

[ [1, 2], [4, 3] ]


Example Explanation
Explanation 1:

 
Only 1 is to be arranged.
Explanation 2:

1 --> 2
      |
      |
4<--- 3
*/

module.exports = { 
 //param A : integer
 //return a array of array of integers
	generateMatrix : function(A){
        const ans = []
        for(let i = 0; i<A;i++){
            ans[i] = Array(A)
        }
         let val = 1;
         let i = 0, j = 0
        while(A> 1){
            for(let k = 1; k<A; k++){
                ans[i][j] = val;
                val++;
                j++;
            }

            for(let k = 1; k<A; k++){
                ans[i][j] = val;
                val++;
                i++;
            }

            for(let k = 1; k<A; k++){
                ans[i][j] = val;
                val++;
                j--;
            }

            for(let k = 1; k<A; k++){
                ans[i][j] = val;
                val++;
                i--;
            }

            i++; j++;
            A = A-2;
        }
        if(A%2 === 1){
            ans[i][j] = val
        }
        return ans
	}
};
