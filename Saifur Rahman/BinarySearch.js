const binarySearch = (arr,start,target)=> {
    arr.sort((a,b)=>{return a-b}); 
    console.log(arr);
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return `Find at ` + mid;
        }
        else if (arr[mid] > target) {
            end = mid-1;
        }
        else {
            start = mid+1;
        }
    }
    return -1;
}
let start = performance.now();
console.log(binarySearch([20,30,50,60,2,34,32,13,15,98,9,26,7,8,3],0,98));
let timeTaken = performance.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
// 1 sec loop run =10lak.
// n,n/2,n/4,n/6......,n/n. time complexity Big O log(n).
