let num = parseInt(prompt("Nhập vào một số nguyên dương: "));

let output1 = "";
for(let i=1; i<=num; i++) {
    for(let j=1; j<=i; j++) {
        output1 += "*";
    }
    output1 += "\n";
}

let output2 = "";
for(let i=num; i>=1; i--) {
    for(let j=1; j<=i; j++) {
        output2 += "*";
    }
    output2 += "\n";
}

console.log("Tam giác vuông thứ nhất:\n" + output1);
console.log("Tam giác vuông thứ hai:\n" + output2);
