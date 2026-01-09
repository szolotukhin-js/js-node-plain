// g:\_book\_development\javascript\js\Khan Yousaf - Advanced JavaScript Unleashed - 2024

const arr = [1, 2, 3];

console.log('--- for of ---');

for (const n of arr) {
    console.log(n);
}

console.log('--- for ---');

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('--- iterator ---');

const it = arr[Symbol.iterator]();
let result = it.next();
while (!result.done) {
    console.log(result.value);
    result = it.next();
}

console.log('---');
