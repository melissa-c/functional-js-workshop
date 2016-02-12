function repeat(operation, num) {
      // SOLUTION GOES HERE

      if (operation === 0) {
      return 1;
      }
      return operation * num;      
    }
    
    // Do not remove the line below
    module.exports = repeat



// OFFICAL ANSWER:
//function repeat(operation, num) {
//      if (num <= 0) return
//      operation()
//      return repeat(operation, --num)
//    }
