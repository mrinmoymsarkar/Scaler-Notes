/*
Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.


Input Format

The only argument given is string A.
Output Format

Return the length of the longest consecutive 1’s that can be achieved.
Constraints

1 <= length of string <= 1000000
A contains only characters 0 and 1.
For Example

Input 1:
    A = "111000"
Output 1:
    3

Input 2:
    A = "111011101"
Output 2:
    7
*/

module.exports = { 
 //param A : string
 //return an integer
	solve : function(A){
        let ans = -Infinity, ones = 0, finalAns = 0;
//   console.log('ans', ans)
        for (let i = 0; i< A.length; i++){
            //  console.log('A[i]', A[i])
            if(A[i] === '1'){
                ones++
            }
        }

        if(ones === A.length) return ones
    
        for(let i = 0; i< A.length; i++){
            if(A[i]==='0'){
                let r = 0;
                for(let j = i+1; j<A.length; j++){
                    if(A[j]==='1'){
                        r++;
                    }
                    else{
                        break
                    }
                }
                 let l = 0;
                for(let j = i-1; j>= 0; j--){
                    if(A[j]==='1'){
                        l++;
                    }
                    else{
                        break
                    }
                }

                if(ones > l + r){
                    ans = l + r +1
                }
                else if (ones === l + r){
                    ans = l+r
                }
                finalAns = Math.max(ans,finalAns )
            }
        }
       
        return finalAns;
	}
};
