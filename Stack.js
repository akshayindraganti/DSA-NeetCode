// Stack using Class

class ClassStack {
  constructor() {
    // This array will hold our stack items.
    this.items = [];
  }

  // Adds an item to the top of the stack.
  push(item) {
    this.items.push(item);
  }

  // Removes and returns the top item of the stack.
  // Returns a message if the stack is empty.
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Returns the top item of the stack without removing it.
  peek() {
    return this.items[this.items.length - 1];
  }

  // Checks if the stack is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the number of items in the stack.
  size() {
    return this.items.length;
  }
}

// Example usage:
const ClassStack = new Stack();

// Imagine you are stacking cars on top of each other.
carStack.push("FORD");
carStack.push("VOLKSWAGAN");
carStack.push("AUDI");

console.log("Current top of the stack:", carStack.peek()); // AUDI
console.log("Stack size:", carStack.size()); // 3

console.log("Removing the top car:", carStack.pop()); // AUDI
console.log("New top of the stack:", carStack.peek()); // VOLKSWAGAN
console.log("Stack size after removal:", carStack.size()); // 2

// Stack using functions

function FunctionStack() {
  // This array holds our stack items (like a pile of plates)
  let items = [];

  // We return an object with methods to work with our stack.
  return {
    // Add an item on top of the stack.
    push: function (item) {
      items.push(item);
    },

    // Remove and return the top item of the stack.
    pop: function () {
      if (items.length === 0) {
        return "Stack is empty";
      }
      return items.pop();
    },

    // Look at the top item without removing it.
    peek: function () {
      return items[items.length - 1];
    },

    // Check if the stack is empty.
    isEmpty: function () {
      return items.length === 0;
    },

    // Get the number of items in the stack.
    size: function () {
      return items.length;
    },
  };
}

// Example usage:
let carStack = FunctionStack();

// Imagine you're stacking cars on top of each other:
carStack.push("FORD");
carStack.push("VOLKSWAGAN");
carStack.push("AUDI");

console.log("Current top of the stack:", carStack.peek()); // Should output "AUDI"
console.log("Stack size:", carStack.size()); // Should output 3

console.log("Removing the top car:", carStack.pop()); // Removes and outputs "AUDI"
console.log("New top of the stack:", carStack.peek()); // Should now output "VOLKSWAGAN"
console.log("Stack size after removal:", carStack.size()); // Should output 2
