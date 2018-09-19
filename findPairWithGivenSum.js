
var arr = [8, 7, 2, 5, 3, 1];
var sum = 10;

// function findPairWithGivenSum(arr, sum) {
//     for(var i = 0; i < arr.length-1; i++){
//         for (var j = i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === sum){
//                 console.log(i,j);
//             }
//         }
//     }
//     console.log("not found");
// }

function findPairWithGivenSum(arr, sum) {
    var dict = {};
    for(var i = 0; i < arr.length; i++){
        if(dict[sum-arr[i]] || dict[sum-arr[i]] === 0) {
            console.log(i, dict[sum - arr[i]]);
        }
        else {
            dict[arr[i]] = i;
        }
    }
}

console.log(findPairWithGivenSum(arr, sum));
