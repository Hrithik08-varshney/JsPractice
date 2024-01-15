const strAdjust = (A, B) => {
  if (A.length !== B.length) return "No";
  let objA = {};
  let objB = {};
  for (let i = 0; i < A.length; i++) {
    if (Object.keys(objA).includes(A[i])) {
      objA[A[i]] += 1;
    } else {
      objA[A[i]] = 1;
    }
  }

  for (let i = 0; i < B.length; i++) {
    if (Object.keys(objB).includes(B[i])) {
      objB[B[i]] += 1;
    } else {
      objB[B[i]] = 1;
    }
  }

  if (
    Object.values(objA).sort().toString() ===
    Object.values(objB).sort().toString()
  ) {
    let flag = 0;
    for (let i = 0; i < A.length; i++) {
      for (let j = i; j < B.length; j++) {
        if (B[i] === A[j] && flag === 1) {
          return j;
        } else if (B[i] === A[j]) {
          break;
        } else {
          flag = 1;
        }
      }
    }
  } else {
    return "No";
  }
};

// console.log(strAdjust("BADA", "BDAA"));
console.log(strAdjust("EACBD", "EABCD"));
