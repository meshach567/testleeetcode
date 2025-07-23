// Given two sorted arrays a[] and b[], the task is to return union of both the arrays in sorted order. Union of two arrays is an array having all distinct elements that are present in either array. The input arrays may contain duplicates.

// Input: a[] = {1, 1, 2, 2, 2, 4}, b[] = {2, 2, 4, 4}
// Output: {1, 2, 4}

function unionOfTwoArrays(a, b) {
    const res = [];

    for (let i = 0; i < a.length; i++)  {
        if (!res.includes(a[i])) {
            res.push(a[i]);
        }
    }

    for ( let j = 0; j < b.length; j++) {
        if (!res.includes(b[j])) {
            res.push(b[j]);
        }
    }

    res.sort((x, y) => x - y);
    return res;
};

const a = [1, 1, 2, 2, 2, 4];
const b = [2, 2, 4, 4];

console.log(unionOfTwoArrays(a, b)); // Output: [1, 2, 4]
