class ClassTree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // Adds a child node to this node.
  addChild(childNode) {
    this.children.push(childNode);
  }

  // Recursively prints the tree with indentation.
  print(indent = 0) {
    console.log(" ".repeat(indent) + this.value);
    for (const child of this.children) {
      child.print(indent + 2);
    }
  }
}

// Example usage:
const root = new ClassTree("Root");
const child1 = new ClassTree("Child 1");
const child2 = new ClassTree("Child 2");

root.addChild(child1);
root.addChild(child2);

child1.addChild(new ClassTree("Child 1.1"));
child1.addChild(new ClassTree("Child 1.2"));
child2.addChild(new ClassTree("Child 2.1"));

console.log("Class-Based Tree:");
root.print();

function FunctionTree(value) {
  return {
    value: value,
    children: [],
    // Adds a child node to this node.
    addChild(childNode) {
      this.children.push(childNode);
    },
    // Recursively prints the tree with indentation.
    print(indent = 0) {
      console.log(" ".repeat(indent) + this.value);
      this.children.forEach((child) => child.print(indent + 2));
    },
  };
}

// Example usage:
const rootNode = FunctionTree("Root");
const childNode1 = FunctionTree("Child 1");
const childNode2 = FunctionTree("Child 2");

rootNode.addChild(childNode1);
rootNode.addChild(childNode2);

childNode1.addChild(FunctionTree("Child 1.1"));
childNode1.addChild(FunctionTree("Child 1.2"));
childNode2.addChild(FunctionTree("Child 2.1"));

console.log("\nFunction-Based Tree:");
rootNode.print();
