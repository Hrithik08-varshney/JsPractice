var longestCommonPrefix = function (strs) {
  let newStr = "";
  let compStr = "";
  for (let elem = 0; elem < strs.length; elem++) {
    let element = strs[elem];
    let nextElement = strs[elem + 1];
    if (compStr === "") {
      if (element[0] != nextElement[0]) break;
      for (
        let str = 0;
        str < element.length || str < nextElement.length;
        str++
      ) {
        if (element[str] === nextElement[str]) {
          compStr += element[str];
        } else {
          break;
        }
      }
    }
    else{
      for(let str=0; str < compStr.length || str < nextElement.length; str++){
        
      }
    }
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
