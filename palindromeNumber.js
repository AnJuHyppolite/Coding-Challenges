const isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    return x === reversedInt(x)
 };

const reversedInt = function(x) {
    let reversed = 0;
    
    while (x > 0) { 
        x = Math.floor(x / 10) 
        console.log(x)
    }
    return reversed;
}
