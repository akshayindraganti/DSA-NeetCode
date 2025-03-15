class FibonacciDP {
  constructor() {
    // dp array to store computed Fibonacci numbers (memoization)
    this.dp = [];
  }

  // Compute the nth Fibonacci number using recursion with memoization.
  fib(n) {
    if (n < 0) return null; // invalid input
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Return already computed value if available.
    if (this.dp[n] !== undefined) {
      return this.dp[n];
    }

    // Recursively compute and store the result.
    this.dp[n] = this.fib(n - 1) + this.fib(n - 2);
    return this.dp[n];
  }
}

// Example usage:
const fibSolver = new FibonacciDP();
console.log("Class-Based Fibonacci DP for 10:", fibSolver.fib(10)); // Output: 55

function createFibonacciDP() {
  // Private dp array to cache computed Fibonacci numbers.
  const dp = [];

  // Helper function to compute Fibonacci numbers with memoization.
  function fib(n) {
    if (n < 0) return null; // invalid input
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Return cached result if available.
    if (dp[n] !== undefined) return dp[n];

    // Compute and store the result.
    dp[n] = fib(n - 1) + fib(n - 2);
    return dp[n];
  }

  return { fib };
}

// Example usage:
const fibFactory = createFibonacciDP();
console.log("Function-Based Fibonacci DP for 10:", fibFactory.fib(10)); // Output: 55
