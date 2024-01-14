function isPrime(number) {
    for(let i = 2; i < num; i++)
        if(number % i === 0){
            return false;
        } 
    return num > 1;
}

let n = parseInt(prompt("Nhập:"));
for(let i = 2; i < n; i++){
    if(isPrime(i)){
        console.log(i);
    }
}
