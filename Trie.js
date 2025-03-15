// Node class representing each character in the trie.
class TrieNode {
  constructor() {
    this.children = {}; // Object mapping characters to child TrieNodes.
    this.endOfWord = false; // Flag to mark the end of a word.
  }
}

// Trie class to manage the overall trie structure.
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Inserts a word into the trie.
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.endOfWord = true;
  }

  // Returns true if the word exists in the trie.
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.endOfWord;
  }

  // Returns true if there is any word in the trie that starts with the given prefix.
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}

// Example usage:
const trie = new Trie();
trie.insert("hello");
trie.insert("helium");

console.log(trie.search("hello")); // true
console.log(trie.search("hel")); // false
console.log(trie.startsWith("hel")); // true

// Factory function to create a trie node.
function createTrieNode() {
  return {
    children: {},
    endOfWord: false,
  };
}

// Factory function to create a trie with its methods.
function createTrie() {
  const root = createTrieNode();

  return {
    // Inserts a word into the trie.
    insert(word) {
      let node = root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = createTrieNode();
        }
        node = node.children[char];
      }
      node.endOfWord = true;
    },

    // Returns true if the word exists in the trie.
    search(word) {
      let node = root;
      for (const char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.endOfWord;
    },

    // Returns true if there is any word in the trie that starts with the given prefix.
    startsWith(prefix) {
      let node = root;
      for (const char of prefix) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    },
  };
}

// Example usage:
const trieFactory = createTrie();
trieFactory.insert("hello");
trieFactory.insert("helium");

console.log(trieFactory.search("hello")); // true
console.log(trieFactory.search("hel")); // false
console.log(trieFactory.startsWith("hel")); // true
