//  Select a Random Element from JS Array

let colors = ["red", "green", "blue", "yellow"];
let random = colors.sort(() => 0.5 - Math.random())[0];
console.log(random);



// using slice
let n = [10, 20, 30, 40];
let randoms = n.slice(Math.floor(Math.random() * n.length), Math.floor(Math.random() * n.length) + 1)[0];
console.log(randoms);