var twoSum = function(nums, target) {
    for (let i = 0,j=i+1; i < nums.length; ) {
        if(nums[i]+nums[j]==target) 
        return [i,j];
        else j++; 
        if(j==nums.length){
            ++i;
            j=i+1;
        }
    }
    
};
console.log(twoSum([2,7,11,15],9));