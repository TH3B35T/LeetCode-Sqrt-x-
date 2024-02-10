/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x <= 1){
        return x;
    }

    let left = 2; 
    let right = Math.floor(x/2);

    while(left <= right){
        let mid = Math.floor((left + right)/2)
        let num = mid * mid;

        if(num > x){
            right = mid -1;
        }else if(num < x){
            left = mid +1;
        } else {
            return mid; // Perfect square root found
        }
    }
    return right;
    
};
