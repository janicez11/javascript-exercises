const ftoc = function(tempf) {
  let tempc = (tempf - 32) * (5/9);
  tempc = Math.round(tempc * 10) / 10;
  return tempc
};

const ctof = function(tempc) {
  let tempf = (tempc * (9/5) + 32);
  tempf = Math.round(tempf * 10) / 10;
  return tempf
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
