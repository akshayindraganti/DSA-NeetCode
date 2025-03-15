const Cars = [
  "FORD",
  "VOLKSWAGAN",
  "AUDI",
  "BMW",
  "FERRAI",
  "ROLLS ROYCE",
  "SUZUKI",
  "LAMBORGHINI",
  "BENTLEY",
];

let left = 0; // Start at the first car
let right = Cars.length - 1; // Start at the last car

// Loop until the two pointers meet
while (left < right) {
  console.log(`Pair: ${Cars[left]} and ${Cars[right]}`);
  left++;
  right--;
}
