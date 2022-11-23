var findKthPositive = function(arr, k) {
    let arrNew = [];
    let n= 1;
    let i =0;
    while(true){
        if (n == arr[i]){
            i++;
            n++;
        }
        else{
            arrNew.push(n);
            n++;
            if(arrNew.length>=k) break;
        }
    }
    return arrNew[k-1]  
};

console.log(findKthPositive([2,3,4,7,11],5))