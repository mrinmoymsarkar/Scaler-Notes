module.exports = { 
 //param A : integer
 //return an integer
	solve : function(A){
        // console.log(A)
        function factorial(A){
            if(A === 0 ){
            return 1
             }
            return factorial(A-1)*A
        }
        return (factorial(A))
	}
};
