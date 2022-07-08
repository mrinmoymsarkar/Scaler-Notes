/*
Q3. Number of 1 Bits
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Write a function that takes an integer and returns the number of 1 bits it has.


Problem Constraints
1 <= A <= 109


Input Format
First and only argument contains integer A


Output Format
Return an integer as the answer


Example Input
Input1:
11


Example Output
Output1:
3


Example Explanation
Explaination1:
11 is represented as 1011 in binary.

*/

module.exports = { 
 //param A : integer
 //return an integer
	numSetBits : function(A){
        let ans = 0;
        while(A!=0){
            A = A&(A-1)
            ans++
        }
        return ans;
	}
};
