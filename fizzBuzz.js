var num = 100;

const fizzBuzz = num => {
    let res = [];
    for(let i = 1; i <= num; i++){
        if(i % 6 === 0){
            res.push("FizzBuzz");
        }
        else if( i % 2 === 0){
            res.push("Fizz")
        }
        else if (i % 3 === 0) {
            res.push("Buzz")
        }else {
            res.push(i);
        }
    }
    return res

}


console.log(fizzBuzz(num));