var str = "hello";
// function stringReverse(str){
//     let rtn = str.split('').reverse().join('');
//     return rtn;
// }

function stringReverse(str){
    let res = '';
    for (let char of str){
        res = char + res;
    }
    return res;
}



console.log(stringReverse(str));