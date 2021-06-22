let reverseWords = (str) => {
    let arr = str.trim().split(' ').reverse();
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== ''){
            arr2.push(arr[i]);
        }
    }
    return arr2.join(' ');
}
console.log(reverseWords("blue is sky the"));
console.log(reverseWords(" example    good  a"));