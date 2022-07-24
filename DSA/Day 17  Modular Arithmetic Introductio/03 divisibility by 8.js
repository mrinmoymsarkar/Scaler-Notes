/*
Problem Description
You are given a number A in the form of a string. Check if the number is divisible by eight or not.

Return 1 if it is divisible by eight else, return 0.


Problem Constraints
1 <= length of the String <= 100000
'0' <= A[i] <= '9'


Input Format
The only argument given is a string A.


Output Format
Return 1 if it is divisible by eight else return 0.


Example Input
Input 1:
A = "16"
Input 2:

A = "123"


Example Output
Output 1:
1
Output 2:

0


Example Explanation
Explanation 1:
 16 = 8 * 2
Explanation 2:

123 = 15 * 8 + 3

*/
module.exports = { 
 //param A : string
 //return an integer
	solve : function(A){
		let n = A.length
			if(A.length<=2 && Number(A)%8 ==0){
				return 1
			}
			else if((((100*Number(A[n-3])) + (10*Number(A[n-2])) + (Number(A[n-1])))% 8)== 0){
				return 1
			}
			return 0
		
	}
};
