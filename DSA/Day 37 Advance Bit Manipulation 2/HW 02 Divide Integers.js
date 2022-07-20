/*
Problem Description
Divide two integers without using multiplication, division and mod operator.

Return the floor of the result of the division.

Also, consider if there can be overflow cases i.e output is greater than INT_MAX, return INT_MAX.

NOTE: INT_MAX = 2^31 - 1



Problem Constraints
-231 <= A, B <= 231-1

B != 0



Input Format
The first argument is an integer A denoting the dividend.
The second argument is an integer B denoting the divisor.



Output Format
Return an integer denoting the floor value of the division.



Example Input
Input 1:

 A = 5
 B = 2
Input 2:

 A = 7
 B = 1


Example Output
Output 1:

 2
Output 2:

 7


Example Explanation
Explanation 1:

 floor(5/2) = 2
*/

module.exports = { 
 //param A : integer
 //param B : integer
 //return an integer
	divide : function(A, B){
        let INT_MAX = Math.pow(2, 31) - 1;
        if(!B){
            return INT_MAX;
        }
        let c = A/B;
        if(c >= 0 && c<= INT_MAX){
            return parseInt(c);
        }
        if (c < 0){
            return parseInt(c);
        }
        return INT_MAX;
	}
};
