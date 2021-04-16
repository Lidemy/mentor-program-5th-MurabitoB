function printFactor(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            n /= i;
            console.log(i);
        }
    }
}

printFactor(10);
