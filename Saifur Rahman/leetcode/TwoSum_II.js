var twoSum = function(numbers, target) {
    for (let i = 0,j=numbers.length-1; i < numbers.length; ) {
    if(numbers[i]+numbers[j]==target) 
        return [i+1,j+1];
    else if(numbers[i]+numbers[j]>target)
        j--;
    else
        i++;  
    }
};
console.log(twoSum([2,7,11,15],9));