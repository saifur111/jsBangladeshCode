// BS() for all order (asc or dsc)
// Flooring arr[mid-1]
// ceiling   arr[mid]
const binarySearch = (nums,target)=> {
    let start = 0 ;
    let end = nums.length - 1;
    while (true) {
        const mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                return mid;
            }
            else if (nums[mid] < target) {
                start = mid+1;
            }
            else {
                end = mid-1;
            }
        if(start > end){
            return nums[mid]<target ? mid+1 : mid ;
            break;
        }
    }
}
// let start = performance.now();
console.log(binarySearch([1,3,5,6,9],4));
//console.log(binarySearch([16,12,10,9,8,6,5,3,2,1],7));
// let timeTaken = performance.now() - start;
// console.log("Total time taken : " + timeTaken + " milliseconds");
// 1 sec loop run =10lak.
// n,n/2,n/4,n/6......,n/n. time complexity Big O log(n).