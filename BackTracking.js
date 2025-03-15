class PermutationsSolver {
  constructor(nums) {
    this.nums = nums;
    this.result = [];
  }

  // Public method to start the backtracking process.
  solve() {
    this.backtrack([], Array(this.nums.length).fill(false));
    return this.result;
  }

  // Backtracking helper method.
  backtrack(currentPermutation, used) {
    // If the current permutation is complete, store a copy.
    if (currentPermutation.length === this.nums.length) {
      this.result.push([...currentPermutation]);
      return;
    }

    // Try each number if it hasn't been used yet.
    for (let i = 0; i < this.nums.length; i++) {
      if (used[i]) continue;
      // Choose the number
      currentPermutation.push(this.nums[i]);
      used[i] = true;

      // Recurse to build the permutation further.
      this.backtrack(currentPermutation, used);

      // Backtrack: remove the number and mark it as unused.
      currentPermutation.pop();
      used[i] = false;
    }
  }
}

// Example usage:
const solver = new PermutationsSolver([1, 2, 3]);
console.log("Class-Based Permutations:", solver.solve());
// Output: [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]

function createPermutationsSolver(nums) {
  const result = [];

  // Backtracking helper function.
  function backtrack(currentPermutation, used) {
    if (currentPermutation.length === nums.length) {
      result.push([...currentPermutation]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      currentPermutation.push(nums[i]);
      used[i] = true;

      backtrack(currentPermutation, used);

      currentPermutation.pop();
      used[i] = false;
    }
  }

  // Public API: start the backtracking process.
  return {
    solve() {
      backtrack([], Array(nums.length).fill(false));
      return result;
    },
  };
}

// Example usage:
const solverFunction = createPermutationsSolver([1, 2, 3]);
console.log("Function-Based Permutations:", solverFunction.solve());
// Output: [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]
