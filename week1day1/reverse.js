function string (str){
    var newString = "";

    for(var i = str.length - 1; i >=0; i--) {

      newString += str[i];
    }

    return newString;
}

console.log(string(process.argv[2]));