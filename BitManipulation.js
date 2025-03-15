class BitManipulation {
  // Check if a number is a power of two.
  static isPowerOfTwo(n) {
    // A power of two has only one set bit.
    // n & (n - 1) will be 0 if n is a power of two.
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
  }

  // Count the number of set bits (1s) in a number.
  static countSetBits(n) {
    let count = 0;
    while (n > 0) {
      // Add 1 if the last bit is 1.
      count += n & 1;
      // Right shift n by 1 bit.
      n >>= 1;
    }
    return count;
  }

  // Flip all bits of a number (for a 32-bit integer example).
  static flipBits(n) {
    // Using bitwise NOT to flip bits.
    return ~n;
  }
}

// Example usage:
console.log("Class-Based:");
console.log("Is 16 a power of two? ", BitManipulation.isPowerOfTwo(16)); // true
console.log("Count set bits in 29: ", BitManipulation.countSetBits(29)); // 4 (29 in binary is 11101)
console.log("Flip bits of 5: ", BitManipulation.flipBits(5));

function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}

function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

function flipBits(n) {
  return ~n;
}

// Example usage:
console.log("Function-Based:");
console.log("Is 16 a power of two? ", isPowerOfTwo(16)); // true
console.log("Count set bits in 29: ", countSetBits(29)); // 4
console.log("Flip bits of 5: ", flipBits(5));
