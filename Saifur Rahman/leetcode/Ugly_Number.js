var isUgly = function(n) {
    if (n<=0)return false;
    const fn =(n,d)=>{
        while (n % d == 0) n /= d;
        console.log(n);
    }    
    for(const f of [2, 3, 5])n = fn(n, f);
};
console.log(isUgly(16));