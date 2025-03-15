class ClassSlidingWindow {
  constructor(arr, windowSize) {
    this.arr = arr;
    this.windowSize = windowSize;
  }

  maxSum() {
    const { arr, windowSize } = this;
    if (arr.length < windowSize) return null;

    // Sum of the first window.
    let windowSum = 0;
    for (let i = 0; i < windowSize; i++) {
      windowSum += arr[i];
    }

    let maxSum = windowSum;

    // Slide the window across the array.
    for (let i = windowSize; i < arr.length; i++) {
      windowSum += arr[i] - arr[i - windowSize];
      maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
  }
}

// Example usage:
const numbersArr = [2, 1, 5, 1, 3, 2];
const windowSizeValue = 3;
const sw = new SlidingWindow(numbersArr, windowSizeValue);
console.log("Maximum sum using class-based sliding window is:", sw.maxSum());
// Output: Maximum sum using class-based sliding window is: 9

function FunctionMaxSumSubarray(arr, windowSize) {
  // If the array is smaller than windowSize, we cannot form a complete window.
  if (arr.length < windowSize) return null;

  // Calculate the sum of the first window (first 'windowSize' elements).
  let windowSum = 0;
  for (let i = 0; i < windowSize; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window through the array, one element at a time.
  for (let i = windowSize; i < arr.length; i++) {
    // Remove the element that is leaving the window and add the new element.
    windowSum += arr[i] - arr[i - windowSize];
    // Update maxSum if the new windowSum is greater.
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Example usage:
const numbers = [2, 1, 5, 1, 3, 2];
const windowSize = 3;
console.log(
  "Maximum sum of a subarray of length",
  windowSize,
  "is:",
  FunctionMaxSumSubarray(numbers, windowSize)
);
// Output: Maximum sum of a subarray of length 3 is: 9
