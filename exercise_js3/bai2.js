//write a function formatMoney(amount) to format currency money


let formatMoney = (amount) => {
    if(amount < 0){
        return "0";
    }
       return new Intl.NumberFormat().format(amount);
};
console.log(formatMoney(-1));
console.log(formatMoney(0));
console.log(formatMoney(10));
console.log(formatMoney(1000));
console.log(formatMoney(10000));
console.log(formatMoney(1000000));
