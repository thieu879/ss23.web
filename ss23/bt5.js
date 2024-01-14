let a = Math.random*10;
let b;
while(b!=a){
    b = parseInt(prompt("Nhap so doan:"));
    if(b==a){
        console.log("đúng");
    }else if(b>a){
        console.log("nhỏ hơn");
    }else{
        console.log("lớn hơn");
    }
}