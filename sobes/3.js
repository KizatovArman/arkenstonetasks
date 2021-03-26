function vowelsCount(str) {
    var newStr = str.toLowerCase().split('');
    newStr = newStr.filter(s => s == 'a' || s == 'o' || s == 'e' || s == 'u' || s == 'i');
    return newStr.length;

}
console.log(vowelsCount("Hello pRIVBER"));