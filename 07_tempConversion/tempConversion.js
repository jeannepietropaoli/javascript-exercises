const ftoc = function(temp) {
  let convTemp=(5/9 * (temp - 32));
  convTemp=+convTemp.toFixed(1);
  return convTemp;
};

const ctof = function(temp) {
  let convTemp=(9/5 * temp + 32);
  convTemp=+convTemp.toFixed(1);
  return convTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
