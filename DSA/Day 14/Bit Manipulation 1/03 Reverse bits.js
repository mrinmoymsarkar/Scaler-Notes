/*
Q3. Reverse Bits
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Reverse the bits of an 32 bit unsigned integer A.



Problem Constraints
0 <= A <= 232



Input Format
First and only argument of input contains an integer A.



Output Format
Return a single unsigned integer denoting the decimal value of reversed bits.



Example Input
Input 1:

 0
Input 2:

 3


Example Output
Output 1:

 0
Output 2:

 3221225472


Example Explanation
Explanation 1:

        00000000000000000000000000000000    
=>      00000000000000000000000000000000
Explanation 2:

        00000000000000000000000000000011    
=>      11000000000000000000000000000000
*/

module.exports = { 
   //param a : integer
    //return an integer
	reverse : function(num){
          var revnum = 0;
          for( var i = 0; i < 32; i++ ) {
            if( num&1<<i)
              revnum |= 1<<(31-i);
          }
          return revnum>>>0;
	}
};
