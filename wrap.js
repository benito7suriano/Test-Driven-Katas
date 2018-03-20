const wrap = (str, int) => {
  // pointer
  // ['a',b',' ','e','f','g','ba','we','we'];
  let splitStr = str.split('');
  let pointer;
  for(let i = 0; i < splitStr.length; i+int) {
    if(splitStr[i] === ' ') {
      splitStr.splice(i, 1, ' \n');
    }
  }

  return splitStr.join('');
};

module.exports = wrap;
