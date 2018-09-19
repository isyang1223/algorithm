var str = "Cigar? Toss it in a can. It is so tragic";

// function isPalindrome(str) {
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
// }

// function isPalindrome(str) {
//   let validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
//   let stringCharacters = str
//     .toLowerCase()
//     .split("")
//     .reduce(
//       (chars, char) =>
//         validCharacters.indexOf(char) > -1 ? chars.concat(char) : chars,
//       []
//     );
//   return stringCharacters.join("") === stringCharacters.reverse().join("");
// }

function isPalindrome(str){
    let cleaned = str.replace(/\W/g,"").toLowerCase();
    console.log(cleaned)
    return cleaned === cleaned.split("").reverse().join("");
}


console.log(isPalindrome(str));
