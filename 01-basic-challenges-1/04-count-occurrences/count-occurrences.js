function countOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;

// other option

// const countOccurences = (str, char) => str.split((char).length - 1)
