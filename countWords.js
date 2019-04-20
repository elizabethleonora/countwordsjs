
// Gets string value
var string = document.documentElement.outerText;

var wordList = splitWords(string);
var occurenceList = countOccurences(wordList);
var sortedWordList = sortByOccurence(occurenceList);

// Prints the words and the amount of times they appear
console.log("Unique words: " + sortedWordList.length);
console.log(sortedWordList);

// Split string by spaces
function splitWords (string) {
  var wordList = string.split(/\s+/);
  return wordList;
}

// Iterates through wordList and counts occurences
function countOccurences (wordList) {
  var occurenceList = {};
  wordList.forEach(function (string) {
    if (occurenceList.hasOwnProperty(string)) {
      occurenceList[string]++;
    } else {
      occurenceList[string] = 1;
    }
  });

  return occurenceList;
}

// Sorts the words by occurences
function sortByOccurence (occurenceList) {
  var sortedWordList = [];
  sortedWordList = Object.keys(occurenceList).map(function(string) {
    return {
      word: string,
      total: occurenceList[string]
    };
  });

  sortedWordList.sort(function(a, b) {
    return b.total - a.total;
  });

  return sortedWordList;
}
