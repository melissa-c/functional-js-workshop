function getShortMessages(messages) {
      // SOLUTION GOES HERE

     return messages.map(function(val){
        return val.message;
    }).filter(function(val){
      return val.length < 50;
      });
    }
    
    module.exports = getShortMessages


// OFFICIAL ANSWER:
// function getShortMessages(messages) {
//       return messages.filter(function(item) {
//         return item.message.length < 50
//       }).map(function(item) {
//         return item.message
//       })
//     }
