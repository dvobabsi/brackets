module.exports = function check(str, bracketsConfig) {
  // const OPEN_BRACKETS = ['(', '{'];
  // const BRACKETS_PAIR = {
  //   [')']: '(',
  //   ['}']: '{',
  // };
  const sumBracketsConfig = bracketsConfig.map((item) => {
    return `${item[0]}${item[1]}`;
  });
  let steLength = str.length;

  while (str.length) {
    sumBracketsConfig.forEach((item) => {
      str = str.replaceAll(item, "");
    });
    if (str.length === steLength) {
      return false;
    }

    steLength = str.length;
  }
  return true;


}
