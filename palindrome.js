function ispolindrome(str){
    str =str.toLocaleLowerCase();
    return Array.from(str).toString() === Array.from(str).reverse().toString();
}
 
let tes=ispolindrome("katak")
console.log(tes)