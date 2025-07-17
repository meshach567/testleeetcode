const a = [1, 2, 3, 4, 5, 2, 3, 6];
let seen = new Set();
let dupli = [];
for (let i = 0; i < a.length; i++) {
    if (seen.has(a[i])) {
        dupli.push(a[i]);
    } else {
        seen.add(a[i]);
    }
}
console.log(dupli);

// This code finds duplicates in an array using a Set to track seen elements.
// The output will be [2, 3] since these numbers appear more than once in the array.
// The Set allows for efficient checking of whether an element has been seen before, making the solution efficient with a time complexity of O(n).
// The code iterates through the array, checking if each element has already been seen. If it has, it adds the element to the `dupli` array; otherwise, it adds the element to the `seen` Set. This way, we efficiently collect all duplicates in a single pass through the array.

const b = [1, 2, 3, 4, 5, 2, 3, 6];
let map = new Map();
let duplic = [];
for (let i = 0; i < b.length; i++) {
    if (map.has(b[i])) {
        map.set(b[i], map.get(b[i]) + 1);
    } else {
        map.set(b[i], 1);
    }
}
for (let [key, val] of map) {
    if (val > 1) {
        duplic.push(key);
    }
}
console.log(duplic);