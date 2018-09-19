var num = -1234;

function reverse(num){
    let res = parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
    return res;
}

console.log(reverse(num));