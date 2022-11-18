function linearSearch(arr,target){
    for (let index = 0; index < arr.length; index++) {
        if(target==arr[index]) return index; 
    }
    return "Not found";
}
let start = performance.now();;
console.log(linearSearch([20,30,40,50,4,24,78,100,23,56,99,45,67,8,89,909,15,567,454,4445,67,89,90,2334,5665],20));
let timeTaken = performance.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds"); 
