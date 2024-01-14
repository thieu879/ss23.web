function soHoanHao(a){
    let tong = 0;
    for(let i = 1; i < a;i++){
        if(a%i==0){
            tong+=i;
        }
    }
    return a === tong;
}
let number = parseInt(prompt("Nhap so check:"));
if(soHoanHao(number)){
    console.log("la so hoan hao");
}else{
    console.log("khong la so hoan hao");
}