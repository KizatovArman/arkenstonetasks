function reverseStr(s) {
    var resultString = "";
    for (var i = s.length - 1; i >= 0; i--) {
        resultString += s[i];
    }
    return resultString.toLowerCase();
}
console.log(reverseStr("Hello World"))