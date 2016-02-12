function countWords(inputWords) {
      // SOLUTION GOES HERE

      //create a new array of objects.
      //for each element of the old array.
      //if it does not match any element in the new array,
      //then add it to the new array as a property and add 1 to it.
      //else (if it does match) then add 1 to the element it matches.
      //return the new object

      var newObj = {};
      var unique = function(value,input){
        if (!value[input]) {
          value[input] = 1;
        } else {
          value[input] = value[input] + 1;
        }
        return value;
      };
      var result = inputWords.reduce(unique, newObj);
      return result;

    }
    
    module.exports = countWords


// OFFICIAL ANSWER:
// function countWords(arr) {
//       return arr.reduce(function(countMap, word) {
//         countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//         return countMap
//       }, {}) // second argument to reduce initialises countMap to {}
//     }
    
//     module.exports = countWords
