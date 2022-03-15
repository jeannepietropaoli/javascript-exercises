const repeatString = function(string,num) {
    let newString;
    (num>0)? newString=string:
    (num===0)? newString="":
    newString="ERROR";

    for (let i=1 ; i<num ; i++) {
        newString+=string;
    }
    return newString;
    };

// Do not edit below this line
module.exports = repeatString;
