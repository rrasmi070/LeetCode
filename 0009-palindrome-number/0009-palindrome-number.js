/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let revNum = 0;
    let temp = x;
    
    while (temp > 0){
        let rem_dig = temp % 10;
        revNum = rem_dig+(revNum*10);
        temp = Math.floor(temp/10)
    }
    if (revNum == x){
        return true
    }
    else{
        return false
    }
};