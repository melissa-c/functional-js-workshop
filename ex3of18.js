function doubleAll(numbers) {
      // SOLUTION GOES HERE

      var result = numbers.map(function (num){

      return num * 2;
      });
      return result;
    }


   //   return numbers.map(function(val){
   //    return val * 2;
   //  })
   // }


    module.exports = doubleAll

// OFFICIAL ANSWER:
// function doubleAll(numbers) {
//       return numbers.map(function double(num) {
//         return num * 2
//       })
//     }
