/*
Given an array of integers, every element appears thrice except for one, which occurs once.

Find that element that does not appear thrice.

NOTE: Your algorithm should have a linear runtime complexity.

Could you implement it without using extra memory?

*/

module.exports = { 
 //param A : array of integers
 //return an integer
	singleNumber : function(A){
        let n = A.length, ans =0;
        for(let i = 0; i<32; i++){
             let x = 1<<i
            let count = 0;
            for(let j = 0; j<n; j++){
                if((A[j] & (1<<i))){
                    count++
                   
                    // console.log('A[j]', A[j])
                    // console.log('and op', A[j] & (1<<i))
                    // console.log('i', x)
                    // console.log('count', count)
                    
                }
            }
            if((count % 3)!= 0){
                ans = (ans | (1<<i));
                //  console.log('2334count ',x)
                // console.log('i ',i)
            }
        
        }
         return ans;
        
	}
};
