module.exports = { 
 //param A : integer
 //return an integer
	findAthFibonacci : function(A){

        function fib(A){
            if (A ===1 ){
                return 1
            }

            if(A === 0) return 0
            return fib(A-1)+ fib (A -2)
        }
        return fib(A)
	}
};
