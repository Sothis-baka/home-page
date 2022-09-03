### Leetcode 52 N Queens, Hard

##### [Link to the problem](https://leetcode.com/problems/n-queens-ii)

##### Method

Using DFS.

We start from row 0 to row n-1.

On each row, we find a valid position, fill in board and search deeper to see whether we can get a valid answer.

##### Optimize

Since we are filling in from top to bottom, when checking validity we only need to check current column and diagonal lines (the parts above current position)

Do operations on current board and redo them after checking, avoiding creating new objects.

##### Code

```java
class Solution {
    public int totalNQueens(int n) {
        // DFS from row 0
        return searchHelper(0, new boolean[n][n]);
    }

    private int searchHelper(int row, boolean[][] board){
        int n = board.length;
        // Filled the board, increase the result
        if(row == n) return 1;

        // Add up every valid cases
        int count = 0;
        for(int i=0; i<n; i++){
            if(isValid(board, row, i)){
                board[row][i] = true;
                count += searchHelper(row + 1, board);
                board[row][i] = false;
            }
        }

        return count;
    }

    private boolean isValid(boolean[][] board, int i, int j){
        // Check column
        for(int k=0; k<i; k++){
            if(board[k][j]) return false;
        }
        // Check diagonal line
        for(int m=i-1, n=j-1; m>=0 && n>=0; m--, n--){
            if(board[m][n]) return false;
        }
        // Check reverse diagonal line
        for(int m=i-1, n=j+1; m>=0 && n<board.length; m--, n++){
            if(board[m][n]) return false;
        }

        return true;
    }
}
```
