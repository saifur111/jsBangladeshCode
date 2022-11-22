// BS() 
// Number of occurance or max amount of target value 
const binarySearch = (nums,target)=> {
    let start = 0 ;
    let end = nums.length - 1;
    let c = 0;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                c = 1 ;
                let left =mid-1;
                
                while(1){
                    c++;
                    left--;
                    if(nums[left]!=target)break;
                }
                let right = mid+1;
                while(1){
                    c++;
                    right++;
                    if(nums[right]!=target)break;
                }
                return c;
            }
            else if (nums[mid] < target) {
                start = mid+1;
            }
            else {
                end = mid-1;
            }
    }
}
// let start = performance.now();
console.log(binarySearch([1,3,5,6,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,23,45,67,98],10));
//console.log(binarySearch([16,12,10,9,8,6,5,3,2,1],7));
// let timeTaken = performance.now() - start;
// console.log("Total time taken : " + timeTaken + " milliseconds");
// 1 sec loop run =10lak.
// n,n/2,n/4,n/6......,n/n. time complexity Big O log(n).