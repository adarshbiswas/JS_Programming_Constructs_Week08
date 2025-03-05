// Compute prime factors of a number
let num = parseInt(process.argv[2]);
console.log(`Prime factors of ${num}:`);

for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
        console.log(i);
        num /= i;
    }
}
if (num > 1) console.log(num);
