class UniquePaths {
  constructor(m, n) {
    this.m = m; // number of rows
    this.n = n; // number of columns
    this.dp = []; // 2D DP array
  }

  computePaths() {
    // Initialize the 2D DP array with 0's
    this.dp = Array.from({ length: this.m }, () => Array(this.n).fill(0));

    // Base case: there's 1 way to reach any cell in the first row or first column.
    for (let i = 0; i < this.m; i++) {
      this.dp[i][0] = 1;
    }
    for (let j = 0; j < this.n; j++) {
      this.dp[0][j] = 1;
    }

    // Fill the DP table:
    // The number of ways to reach cell (i, j) is the sum of ways to reach (i-1, j) and (i, j-1)
    for (let i = 1; i < this.m; i++) {
      for (let j = 1; j < this.n; j++) {
        this.dp[i][j] = this.dp[i - 1][j] + this.dp[i][j - 1];
      }
    }

    // The bottom-right cell contains the total number of unique paths.
    return this.dp[this.m - 1][this.n - 1];
  }
}

// Example usage:
const uniquePathsSolver = new UniquePaths(3, 7);
console.log("Class-Based Unique Paths:", uniquePathsSolver.computePaths());
// For a 3x7 grid, output will be the number of unique paths.

function createUniquePathsSolver(m, n) {
  // Private 2D DP array
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // Initialize the first row and first column with 1's.
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  // Fill the DP table:
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return {
    computePaths: function () {
      return dp[m - 1][n - 1];
    },
    getDPTable: function () {
      return dp;
    },
  };
}

// Example usage:
const uniquePathsFactory = createUniquePathsSolver(3, 7);
console.log("Function-Based Unique Paths:", uniquePathsFactory.computePaths());
// Output: The number of unique paths in a 3x7 grid.
