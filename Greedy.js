class GreedyCoinChange {
  constructor(coins) {
    // Assume coins is an array of coin denominations sorted in descending order.
    this.coins = coins;
  }

  // Method to compute the coin change for a given amount.
  getChange(amount) {
    let remaining = amount;
    const result = [];

    for (const coin of this.coins) {
      // Use as many of this coin as possible.
      while (remaining >= coin) {
        result.push(coin);
        remaining -= coin;
      }
    }

    // If remaining amount is not zero, exact change is not possible.
    return remaining === 0 ? result : null;
  }
}

// Example usage:
const coinChanger = new GreedyCoinChange([25, 10, 5, 1]);
console.log("Class-Based Coin Change for 63:", coinChanger.getChange(63));
// Output might be: [25, 25, 10, 1, 1, 1]  (totaling 63)

function createGreedyCoinChange(coins) {
  // Assume coins is an array of coin denominations sorted in descending order.
  return {
    getChange(amount) {
      let remaining = amount;
      const result = [];

      for (const coin of coins) {
        while (remaining >= coin) {
          result.push(coin);
          remaining -= coin;
        }
      }

      return remaining === 0 ? result : null;
    },
  };
}

// Example usage:
const coinChangerFactory = createGreedyCoinChange([25, 10, 5, 1]);
console.log(
  "Function-Based Coin Change for 63:",
  coinChangerFactory.getChange(63)
);
// Output might be: [25, 25, 10, 1, 1, 1]  (totaling 63)
