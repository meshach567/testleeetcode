// How to Get First N Elements from an Array?

// using for loop
const array = [1, 2, 3, 4, 5, 6];
const m = 3; // Number of elements to extract
const results = [];
for (let i = 0; i < n; i++) {
    results.push(arr[i]);
}
console.log(results); // Output: [1, 2, 3]


// Using  filter
const arrs = [1,2,3,4,5,6];
const a = 4;

const newArray = arr.filter((element, index) => index < a);
console.log(newArray);

// Using Array.from and slice

const arr = [1, 2, 3, 4, 5, 6];
const n = 3;

const result = Array.from(arr.keys()).slice(0, n).map(index => arr[index]);

console.log(result);

// [ 1, 2, 3, 4 ]



// using  reduce
// This code counts the occurrences of each element in an array using a Map.
const arra = [1, 2, 3, 4, 5, 6];
const c = 3;

const total = arr.reduce((acc, curr, index) => {
  if (index < n) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(total);

// [ 1, 2, 3 ]