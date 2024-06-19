var merge = function (intervals) {
  const startIndex = 0;
  const endIndex = 1;
  intervals.sort((a, b) => a[startIndex] - b[startIndex]);
  const mergedIntervals = [];
  let mergeStart = intervals[0][startIndex];
  let mergeEnd = intervals[0][endIndex];

  for (let i = 0; i < intervals.length; i++) {
    const subsequentIntervals = intervals[i];
    if (subsequentIntervals[startIndex] <= mergeEnd) {
      mergeEnd = Math.max(mergeEnd, subsequentIntervals[endIndex]);
    } else {
      mergedIntervals.push([mergeStart, mergeEnd]);
      mergeStart = subsequentIntervals[startIndex];
      mergeEnd = subsequentIntervals[endIndex];
    }
  }
  mergedIntervals.push([mergeStart, mergeEnd]);
  return mergedIntervals;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
