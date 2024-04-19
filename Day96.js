//remove letter to equalize frequency

function equalFrequency(word) {
  const charFrequency = new Array(26).fill(0);

  for (const char of word) {
      charFrequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; ++i) {
      if (charFrequency[i]) {
          charFrequency[i]--;

          let commonFrequency = 0;
          let allFrequenciesEqual = true;

          for (const frequency of charFrequency) {
              if (frequency === 0) {
                  continue;
              }
              if (commonFrequency && frequency !== commonFrequency) {
                  allFrequenciesEqual = false;
                  break;
              }
              commonFrequency = frequency;
          }

          if (allFrequenciesEqual) {
              return true;
          }
          charFrequency[i]++;
      }
  }
  return false;
}

console.log(equalFrequency("cccaa"));