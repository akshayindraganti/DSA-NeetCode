// Class Binary Search
class ClassBinarySearch {
  constructor(sortedArray) {
    // Store the sorted array in the class instance.
    this.sortedArray = sortedArray;
  }

  // Method to search for the target value.
  search(target) {
    let left = 0;
    let right = this.sortedArray.length - 1;

    while (left <= right) {
      // Find the middle index.
      let mid = Math.floor((left + right) / 2);

      // If the target is found, return the index.
      if (this.sortedArray[mid] === target) {
        return mid;
      }

      // If the target is greater than the middle element,
      // search the right half.
      if (this.sortedArray[mid] < target) {
        left = mid + 1;
      } else {
        // Otherwise, search the left half.
        right = mid - 1;
      }
    }

    // If the target is not found, return -1.
    return -1;
  }
}

// Binary search function that searches for a target value in a sorted array
function FunctionBinarySearch(sortedArray, target) {
  let left = 0; // Start of the search interval
  let right = sortedArray.length - 1; // End of the search interval

  while (left <= right) {
    // Find the middle index
    let mid = Math.floor((left + right) / 2);

    // Check if the target is at the middle
    if (sortedArray[mid] === target) {
      return mid; // Target found, return its index
    }

    // If the target is greater than the middle element,
    // it must be in the right half.
    if (sortedArray[mid] < target) {
      left = mid + 1;
    } else {
      // Otherwise, it must be in the left half.
      right = mid - 1;
    }
  }

  // If we exit the loop, the target is not in the array.
  return -1;
}

// Example usage:
const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;
const index = FunctionBinarySearch(numbers, target);
// const index = new ClassBinarySearch(numbers);

if (index !== -1) {
  console.log(`Found ${target} at index ${index}`);
} else {
  console.log(`${target} not found in the array`);
}
