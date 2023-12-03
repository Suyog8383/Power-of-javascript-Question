function powerOf(num,power){
    let ans=1;
    for(let i=1;i<=power;i++){
        ans = (num * ans);
    }
    return ans;
}
console.log(powerOf(2,3));
