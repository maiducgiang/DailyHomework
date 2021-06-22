
const isPandigital = (num) => {
    const numberString = num.toString();
    for (let i = 0; i <= 9; i++) {
        if(!numberString.includes(i)){
            return false;
        }
    }
    return true;
};
console.log(isPandigital(98140723568910));
console.log(isPandigital(90864523148909));