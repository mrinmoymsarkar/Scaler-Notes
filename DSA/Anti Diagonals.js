/*
Problem Description
Give a N * N square matrix A, return an array of its anti-diagonals. Look at the example for more details.


Problem Constraints
1<= N <= 1000
1<= A[i][j] <= 1e9


Input Format
First argument is an integer N, denoting the size of square 2D matrix.
Second argument is a 2D array A of size N * N.


Output Format
Return a 2D integer array of size (2 * N-1) * N, representing the anti-diagonals of input array A.
The vacant spaces in the grid should be assigned to 0.


Example Input
Input 1:
3
1 2 3
4 5 6
7 8 9
Input 2:

1 2
3 4


Example Output
Output 1:
1 0 0
2 4 0
3 5 7
6 8 0
9 0 0
Output 2:

1 0
2 3
4 0


Example Explanation
For input 1:
The first anti diagonal of the matrix is [1 ], the rest spaces shoud be filled with 0 making the row as [1, 0, 0].
The second anti diagonal of the matrix is [2, 4 ], the rest spaces shoud be filled with 0 making the row as [2, 4, 0].
The third anti diagonal of the matrix is [3, 5, 7 ], the rest spaces shoud be filled with 0 making the row as [3, 5, 7].
The fourth anti diagonal of the matrix is [6, 8 ], the rest spaces shoud be filled with 0 making the row as [6, 8, 0].
The fifth anti diagonal of the matrix is [9 ], the rest spaces shoud be filled with 0 making the row as [9, 0, 0].
For input 2:

The first anti diagonal of the matrix is [1 ], the rest spaces shoud be filled with 0 making the row as [1, 0, 0].
The second anti diagonal of the matrix is [2, 4 ], the rest spaces shoud be filled with 0 making the row as [2, 4, 0].
The third anti diagonal of the matrix is [3, 0, 0 ], the rest spaces shoud be filled with 0 making the row as [3, 0, 0].
*/

module.exports = { 
 //param A : array of array of integers
 //return a array of array of integers
	diagonal : function(A){
        let ad = Array.from(Array(2* A.length -1), _ => Array(A.length).fill(0));
        let n = A.length
        let r1=0
          for(let j=0; j< n;j++){
                  let r = 0, c = j, c1 = 0;
                  while(r < n && c >=0){
                          ad[r1][c1] = A[r][c]
                          c1++;
                          r++;
                          c--;
                  }
                  r1++;
          }

          for(let i = 1; i< n; i++){
                let  r= i, c = n-1,  c1 = 0;;
                while(r < n && c >=0){
                          ad[r1][c1] = A[r][c]
                          c1++;
                          r++;
                          c--;
                  }
                  r1++;
          }
          return ad
	}  
};
