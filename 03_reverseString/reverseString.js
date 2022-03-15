const reverseString = function(string) {
  const stringArray=string.split("");  
  
  let newString=Array(stringArray.length).fill(0);

  for (let i=0; i<stringArray.length ; i++){
      newString[i]=stringArray[(stringArray.length-1)-i];
  }

  return newString.join("");
};

// Do not edit below this line
module.exports = reverseString;
