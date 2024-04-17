//valid anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let objS = {};
  let objT = {};
  for (let i = 0; i < s.length; i++) {
    if (!Object.keys(objS).includes(s[i])) {
      objS[s[i]] = 1;
    } else {
      objS[s[i]] += 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!Object.keys(objT).includes(t[i])) {
      objT[t[i]] = 1;
    } else {
      objT[t[i]] += 1;
    }
  }
  for (const [key, value] of Object.entries(objS)) {
    if (!Object.keys(objT).includes(key)) return false;
    else if (objS[key] !== objT[key]) {
      return false;
    }
  }
  return true;
};

// console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

