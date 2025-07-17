let arr = [
    { name: 'Arrays', topic: 'Data Structures' },
    { name: 'Recursion', topic: 'Algorithms' },
    { name: 'JavaScript', topic: 'Programming' }
];
arr.sort((a, b) => a.name.localeCompare(b.name));
console.log(arr);

let ar = [
    { name: 'Arrays', topic: 'Data Structures' },
    { name: 'Recursion', topic: 'Algorithms' },
    { name: 'JavaScript', topic: 'Programming' }
];

// Create a collator for locale-aware string comparison
const collator = new Intl.Collator('en', { sensitivity: 'base' });

arr.sort((a, b) => collator.compare(a.name, b.name));
console.log(ar);
// Nikunj Sonigara