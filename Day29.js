const countSum = (N, K, arr) => {
    let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (arr[i] + arr[j] === K) count++;
    }
  }
  return count;
};

// console.log(countSum(4, 6, [1, 5, 7, 1]));
console.log(countSum(4, 2, [1, 1, 1, 1]));

