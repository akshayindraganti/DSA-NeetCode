// Define a Node class to represent each element in the linked list.
class Node {
  constructor(value) {
    this.value = value; // The data stored in this node.
    this.next = null; // Pointer to the next node, initially set to null.
  }
}

// Define a LinkedList class to manage the nodes.
class ClassLinkedList {
  constructor() {
    this.head = null; // The first node of the list.
  }

  // Append a new node with the given value at the end of the list.
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty, the new node becomes the head.
      this.head = newNode;
      return;
    }
    // Otherwise, traverse to the end of the list and add the new node.
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Print all the values in the linked list.
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage:
const myList = new ClassLinkedList();
myList.append("Node1");
myList.append("Node2");
myList.append("Node3");
console.log("Class-Based Linked List:");
myList.printList();

function FunctionLinkedList() {
  let head = null; // Private variable to store the head of the list.

  // Function to create a new node.
  function createNode(value) {
    return {
      value: value,
      next: null,
    };
  }

  // Append a new node at the end of the list.
  function append(value) {
    const newNode = createNode(value);
    if (!head) {
      head = newNode;
      return;
    }
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Print all the values in the linked list.
  function printList() {
    let current = head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Expose the functions to work with the linked list.
  return {
    append,
    printList,
  };
}

// Example usage:
const myLinkedList = FunctionLinkedList();
myLinkedList.append("NodeA");
myLinkedList.append("NodeB");
myLinkedList.append("NodeC");
console.log("Function-Based Linked List:");
myLinkedList.printList();
