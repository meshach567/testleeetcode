// Max Element in an Array


// using filter Method
const a = [22, 65, 1, 39];
    let max = a[0];
    a.filter(num => {
        if (num > max) {
            max = num;
        }
    });

console.log(max);

// This code finds the maximum element in an array using the filter method.

// The output will be 65, which is the largest number in the array.
// The filter method is not the most efficient way to find the maximum element, as it iter

let b = [22, 65, 1, 39];
let i;
let maxs = a[0];

for (i = 1; i < a.length; i++) {
    if (a[i] > maxs)
        maxs = a[i];
}

console.log(maxs);

// This code finds the maximum element in an array using a for loop.
// It initializes the maximum value with the first element and iterates through the array to find the

let c = [22, 65, 1, 39];
let j;
let maxx = a[0];

for (i = 1; i < a.length; i++) {
    if (a[i] > maxx)
        maxx = a[i];
}

console.log(maxx);