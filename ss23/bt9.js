function fibonacci(n) {
    let a = 0, b = 1, sum = 0, fibonacciSeries = [];

    while (sum <= n) {
        fibonacciSeries.push(sum);
        let temp = a;
        a = b;
        b = temp + b;
        sum += a;
    }

    return fibonacciSeries;
}

let number = parseInt(prompt("Nhập: "));
console.log(fibonacci(number));
