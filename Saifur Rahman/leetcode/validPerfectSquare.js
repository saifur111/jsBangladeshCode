var isPerfectSquare = function(num) {
    if(num==1)return true;
    let n1=num;
    let i=~~(n1**0.5);
    if(i*i==num)return true;
    else return false;
};
console.log(isPerfectSquare(9));