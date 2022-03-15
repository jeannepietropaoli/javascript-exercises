/* with the rest parameters method: meaning that only the values we have to compare the inital array with are included in an spearate array (named after the "..." in the function parameter) */
const removeFromArray = function(array,...args) {
    let rightArray=array;

    for (let i=0 ; i<args.length ; i++){
    
     for (let j=0 ; j<array.length ; j++){
        if (args[i]!==array[j]){
            if (rightArray[j]===undefined){
                continue;
            }
        }
        else{
            rightArray[j]=undefined;
        }
        }
    }

    let k=0;
    while (k<rightArray.length){
        if (rightArray[k]===undefined){
            rightArray.splice(k,1);
        }
        else {
            k++;
        }
    }
    return rightArray;

};

// Do not edit below this line
module.exports = removeFromArray;

/*   with the argument object method (meaning that the first arg (the array we have to analyse) is part of the args)

const removeFromArray = function(array) {
    let rightArray=array;

    for (let i=1 ; i<arguments.length ; i++){
    
     for (let j=0 ; j<array.length ; j++){
        if (arguments[i]!==array[j]){
            if (rightArray[j]===undefined){
                continue;
            }
        }
        else{
            rightArray[j]=undefined;
        }
        }
    }

    let k=0;
    while (k<rightArray.length){
        if (rightArray[k]===undefined){
            rightArray.splice(k,1);
        }
        else {
            k++;
        }
    }
    return rightArray;

};
*/