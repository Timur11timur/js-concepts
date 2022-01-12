console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


console.log(typeof 10);
console.log(typeof 10n);

console.log(900719925474099143234);
console.log(900719925474099143234n);

console.log(10n - 4n);
//console.log(10n - 4); //Error
console.log(parseInt(10n) - 4);
console.log(10n - BigInt(4));
console.log(5n / 2n); //2n
//console.log(10.3245n); //Error