function reduce(arr, fn, initial) {
      // SOLUTION GOES HERE

      //your reduce function will be passed an array of words, 
      //and a function, and an initial value which will return 
      //an object containing the counts for each word found in the array.

      //create empty object to contain the new counts at the end.
      //go through array to compare prev value with curr value.
      //if curr value does NOT match prev key then make a new key and add 1.
      //if curr value DOES match then add 1 to the prev key.
      //create new array of these keys with new tallied values.

      var initial = {};
 
      var count = arr.reduce(function (prev, curr){
        if (!prev[curr]) {
          return prev[curr] = 1;
        } else {
          return prev[curr] = prev[curr] + 1;
        }
      });
      return arr.reduce(fn, initial);

    }
    
    module.exports = reduce


// OFFICIAL ANSWER:
 // function reduce(arr, fn, initial) {
 //      return (function reduceOne(index, value) {
 //        if (index > arr.length - 1) return value // end condition
 //        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
 //      })(0, initial) // IIFE. kick off recursion with initial values
 //    }
