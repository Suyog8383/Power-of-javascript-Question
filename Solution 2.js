function powerOf(num,power){
    if(power===0) return 1;
    if(power===1) return num;
    
    return num * powerOf(num,power-1)
}
console.log(powerOf(2,3));
