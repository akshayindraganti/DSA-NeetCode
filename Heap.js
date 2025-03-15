class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper methods to calculate parent and child indices.
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  // Insert a new element into the heap.
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Move the new element up to maintain the heap property.
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = this.parentIndex(index);
      if (this.heap[parent] <= this.heap[index]) break;
      // Swap parent and child.
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
    }
  }

  // Remove and return the smallest element (at the root).
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    // Move the last element to the root.
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  // Move the new root element down to maintain the heap property.
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = this.leftChildIndex(index);
      let right = this.rightChildIndex(index);
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      // Swap the current node with the smallest child.
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  // Peek at the smallest element without removing it.
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
console.log("Peek:", minHeap.peek()); // Output: 3
console.log("Extract Min:", minHeap.extractMin()); // Output: 3
console.log("Extract Min:", minHeap.extractMin()); // Output: 5
console.log("Extract Min:", minHeap.extractMin()); // Output: 8

function createMinHeap() {
  let heap = [];

  // Helper functions for indices.
  const parentIndex = (index) => Math.floor((index - 1) / 2);
  const leftChildIndex = (index) => 2 * index + 1;
  const rightChildIndex = (index) => 2 * index + 2;

  // Moves the last element up to restore the heap property.
  function heapifyUp() {
    let index = heap.length - 1;
    while (index > 0) {
      let parent = parentIndex(index);
      if (heap[parent] <= heap[index]) break;
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent;
    }
  }

  // Moves the element at the root down to restore the heap property.
  function heapifyDown() {
    let index = 0;
    const length = heap.length;
    while (true) {
      let left = leftChildIndex(index);
      let right = rightChildIndex(index);
      let smallest = index;

      if (left < length && heap[left] < heap[smallest]) smallest = left;
      if (right < length && heap[right] < heap[smallest]) smallest = right;
      if (smallest === index) break;
      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      index = smallest;
    }
  }

  return {
    // Insert a new element.
    insert(value) {
      heap.push(value);
      heapifyUp();
    },
    // Remove and return the minimum element.
    extractMin() {
      if (heap.length === 0) return null;
      if (heap.length === 1) return heap.pop();
      const min = heap[0];
      heap[0] = heap.pop();
      heapifyDown();
      return min;
    },
    // Peek at the smallest element.
    peek() {
      return heap.length > 0 ? heap[0] : null;
    },
    // For debugging: return the entire heap array.
    getHeap() {
      return heap;
    },
  };
}

// Example usage:
const minHeapFactory = createMinHeap();
minHeapFactory.insert(5);
minHeapFactory.insert(3);
minHeapFactory.insert(8);
console.log("Peek:", minHeapFactory.peek()); // Output: 3
console.log("Extract Min:", minHeapFactory.extractMin()); // Output: 3
console.log("Extract Min:", minHeapFactory.extractMin()); // Output: 5
console.log("Extract Min:", minHeapFactory.extractMin()); // Output: 8
