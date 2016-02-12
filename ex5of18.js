function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE

        return submittedUsers.every(function(submittedVal){
          return goodUsers.some(function(goodVal){
          return goodVal.id === submittedVal.id;

          });
          
        });
        }

    }
    
    module.exports = checkUsersValid



// OFFICIAL ANSWER:
// function checkUsersValid(goodUsers) {
//       return function allUsersValid(submittedUsers) {
//         return submittedUsers.every(function(submittedUser) {
//           return goodUsers.some(function(goodUser) {
//             return goodUser.id === submittedUser.id
//           })
//         })
//       }
//     }
