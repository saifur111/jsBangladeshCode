var missingNumber = function(nums) {
    let i=0;
    nums.sort((a,b)=> a - b);
    for(i=0;i<nums.length+1;i++){
        if(i==nums[i])continue;
        else return i;
    }
};
console.log(missingNumber([0,1]));