var arr = [4,-6,3,-1,4,2,7]

function subArrayWithZeroSum(arr){
    var dict = {};
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
        if(dict[sum]) {
            return true
        }
        dict[sum] = true;
    }   
    return false;

}
console.log(subArrayWithZeroSum(arr))
